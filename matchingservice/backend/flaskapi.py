from flask import Flask, request, json
from display import *

# imports for the python script
import sys
import gspread
from oauth2client import service_account
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# import firebase_test
import pickle

app = Flask(__name__)

# Global Variables
# Adding needed websites for sheets
scope = ["https://spreadsheets.google.com/feeds", 'https://www.googleapis.com/auth/spreadsheets',
         "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]
# The sheet object the script is connecting to
sheet = ""

# Method to connect to firebase
def openFirestore(firestoreJSONName):
    try:
        # Use the json file to attempt to connect to firebase
        cred = credentials.Certificate("serviceAccountKey.json")
        firebase_admin.initialize_app(cred)
        return True
    except:
        # Unable to connect to firebase
        print("Error opening Firestore. Firebase JSON isn't correct.")
        return False


# Method to connect to Google Sheets API and given Google Sheet
def openSheets(url):
    try:
        # Connecting to Google Sheets API
        cred = service_account.ServiceAccountCredentials.from_json_keyfile_name("credits.json")
        client = gspread.authorize(cred)

        # Var for tracking the URL of the google sheets to be edited
        sheet_url = url

        # Setting the global sheets value and returning true for a successful get
        global sheet
        sh = client.open_by_url(sheet_url)
        sheet = sh.get_worksheet(0)

        return True

    except:
        # Couldn't get the google sheet so return false
        print("Couldn't connect to Google Sheets! Make sure the JSON is correct, the link to the sheet is right, "
              "and make sure sharing is turned on!")
        return False


@app.route('/testing', methods=['GET', 'POST'])
def sample():
    return "tested"


@app.route('/getNames', methods=["GET"])
def names_list():
    data = clustering()
    #names_list1 = pickle.load(open("save.p", "rb"))
    #print(names_list1)
    return json.dumps(data)

@app.route('/sendMatchingToSheet')
def runSheetsScript():
    urlToSheets = "https://docs.google.com/spreadsheets/d/1xH5J9UTXBn5dzDN-9GxhL09OUefJhwJ2NvnRozINnqA/edit?usp=sharing"
    #Attempting to open the connection to Firestore
    if openFirestore(urlToSheets):

        # Getting the Pairings collection
        db = firestore.client()
        pairingList = db.collection('Pairings').get()

        # Opening sheets
        if openSheets():
            # Inserting and formatting the top row
            titleRow = ["Send Email", "First Name", "Last Name", "Partner Type", "P1 FN",
                        "P1 LN", "P1 Email", "P1 Matching Score", "P2 FN",
                        "P2 LN", "P2 Email", "P2 Matching Score"]

            # Inserting heading row and formatting it bold
            sheet.insert_row(titleRow, 1)
            sheet.format('A1:L1', {'textFormat': {'bold': True}})

            # Iterator to get all the docs in the current collection
            for doc in pairingList:

                # If the doc exists, perform a query on it
                if doc.exists:

                    # getting the info on the partners
                    partnerInfo = doc.get("Partners")

                    # separating the info in the list of info
                    p1Info = partnerInfo[0].split('|')

                    # Creating an empty second partner info list
                    p2Info = ["", "", "", ""]

                    # If the current user has two partners, split the second list
                    if len(partnerInfo) == 2:
                        p2Info = partnerInfo[1].split('|')

                    # Creating a new row and adding it to the sheets
                    newRow = [doc.get("email"), doc.get("firstName"), doc.get("lastName"), doc.get("type"), p1Info[0],
                              p1Info[1], p1Info[2], p1Info[3], p2Info[0], p2Info[1], p2Info[2], p2Info[3]]
                    sheet.insert_row(newRow, 2)

        return "Done"
    



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=105)
