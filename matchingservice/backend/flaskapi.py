from flask import Flask, request, json
from flask_cors import CORS
from pyasn1.type.univ import Null
from display import clustering

# imports for the python script
import sys
import gspread
from oauth2client import service_account
import firebase_admin
import os
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
serviceAccountCred = "firebaseCredits.json"

# Method to connect to firebase
def openFirestore():
    try:
        # Use the json file to attempt to connect to firebase
        if os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") is None:
            cred = credentials.Certificate(serviceAccountCred)
        else:
            cred = credentials.Certificate(GOOGLE_APPLICATION_CREDENTIALS)
        if not firebase_admin._apps:
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
        if os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") is None:
            print("first path")
            cred = service_account.ServiceAccountCredentials.from_json_keyfile_name(serviceAccountCred)
            client = gspread.authorize(cred)
        else:
            print("second path")
            cred = service_account.ServiceAccountCredentials.from_json_keyfile_name(GOOGLE_APPLICATION_CREDENTIALS)
            client = gspread.authorize(cred)
        #cred = service_account.ServiceAccountCredentials.from_json_keyfile_name(serviceAccountCred)
        #client = gspread.authorize(cred)

        # Var for tracking the URL of the google sheets to be edited
        sheet_url = url

        # Setting the global sheets value and returning true for a successful get
        global sheet
        sh = client.open_by_url(sheet_url)
        sheet = sh.get_worksheet(0)

        return True

    except Exception as err:
        # Couldn't get the google sheet so return false
        print(err)
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


@app.route('/demo', methods = ['POST'])
def result():
    id = str(request.get_json())
    print(id)
    return "Done"


@app.route('/sendMatchingToSheet', methods = ['POST'] )
def runSheetsScript():

    #Running the pairing algo
    data = clustering()

    #Url to connect to sheets with
    urlToSheets = str(request.get_json())
    print(urlToSheets)
    #Attempting to open the connection to Firestore
    if openFirestore():

        # Getting the Pairings collection
        db = firestore.client()
        pairingList = db.collection('Pairings').get()
        pairings = []
        # Opening sheets
        if openSheets(urlToSheets):
            # Inserting and formatting the top row
            titleRow = ["Send Email", "First Name", "Last Name", "Partner Type", "P1 FN",
                        "P1 LN", "P1 Email", "P1 Matching Score", "P2 FN",
                        "P2 LN", "P2 Email", "P2 Matching Score"]

            #Emptying the sheet to put the new data in
            if sheet.get('A1'):
                while(sheet.get('A1')):
                    sheet.delete_row(1)

            # Inserting heading row and formatting it bold
            sheet.insert_row(titleRow, 1)
            sheet.format('A1:L1', {'textFormat': {'bold': True}})


            # Iterator to get all the docs in the current collection
            for doc in pairingList:

                # If the doc exists, perform a query on it
                if doc.exists:
                    pairings.append(doc.to_dict())

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
    print(pairings)
    return json.dumps(pairings)


@app.route('/getEmails', methods = ['GET', 'POST'] )
def uploadEmailsToDatabase():

    if openFirestore():
        # Getting the Pairings collection
        db = firestore.client()

        #Url to connect to sheets with
        urlToSheets = str(request.get_json())
        print(urlToSheets)
        # Opening sheets
        if openSheets(urlToSheets):

            #Getting the data on column one
            values_list = sheet.col_values(1)

            #While loop for adding column data to firebase
            i = 0
            while(i<len(values_list) and values_list[i]):

                #If the current entry is a vaild email
                if '@' in values_list[i]:

                    #Create the new document and upload it
                    newData = {
                        'Email': values_list[i]
                    }
                    db.collection('participants').document(values_list[i]).set(newData)

                #Loop to next varible
                i+=1

            #Adding formatting message
            if values_list[0]!="Make sure that all the emails are all on the A column. This message is automated, so even if you did the formating right this message will still show":
                messageTitle = ["Make sure that all the emails are all on the A column. This message is automated, so even if you did the formating right this message will still show"]
                sheet.insert_row(messageTitle, 1)

        return json.dumps(values_list)



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORTNUM", 8080)))
    CORS(app)
