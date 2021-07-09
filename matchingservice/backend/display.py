# import firebase_admin
# from firebase_admin import credentials, firestore
# Important Note : Need Python 64 bit version for windows

# Importing Streamlit
from heapq import heapify, heappush, heappop
import math
import firebase_admin
from firebase_admin import credentials, firestore
import os
from pathlib import Path
import pickle

# Load in credentials to access firebase db
# abspath = os.path.abspath('serviceAccountKey.json')
# cred = credentials.Certificate(abspath)  # Never store in public
# firebase_admin.initialize_app(cred)

# firestore.Client.from_service_account_json("firestore-key.json")
# Navigating to correct document - firestore
# db = firestore.client()
#path = Path(__file__).parent / "serviceAccountKey.json"
#db = firestore.Client.from_service_account_json(path)

#collection = db.collection('info')


# Reads Data From All Documents
def read_all_data():
    path = Path(__file__).parent / "serviceAccountKey.json"
    db = firestore.Client.from_service_account_json(path)
    collection = db.collection('info')
    user_list = []
    docs = collection.get()
    for doc in docs:
        user_list.append(doc.to_dict())
    return user_list

def preprocessing():
    list = []
    list = read_all_data()
    for entry in list:
        #processing a mentor or a mentee/assigning a weight
        if entry['mentorOrMentee'] == 'Mentor':
            entry['mentorOrMentee'] = 0
        elif entry['mentorOrMentee'] == 'Mentee':
            entry['mentorOrMentee'] = 1

        #processing q1
        temp = entry['q1']
        entry['q1'] = int(temp)
        #processing q2
        temp = entry['q2']
        entry['q2'] = int(temp)

        #processing q3
        temp = entry['q3']
        val = float(0)
        for i in temp:
            val = val+ float(i)
        val = val / len(temp)
        entry['q3'] = val
        val = float(0)
        #processing q4
        temp = entry['q4']
        for i in temp:
            val = val+ float(i)
        val = val / len(temp)
        entry['q4'] = val
        val = float(0)
        #processing q5
        temp = entry['q5']
        for i in temp:
            val = val+ float(i)
        val = val / len(temp)
        entry['q5'] = val
    return list


def dist(a,b):
    q1diff = abs(a['q1']-b['q1']) ** 2
    q2diff = abs(a['q2']-b['q2']) ** 2
    q3diff = abs(a['q3']-b['q3']) ** 2
    q4diff = abs(a['q4']-b['q4']) ** 2
    q5diff = abs(a['q5']-b['q5']) ** 2
    sum = q1diff+q2diff+q3diff+q4diff+q5diff
    return math.sqrt(float(sum))

def clustering():
    data = preprocessing()
    mentors = []
    mentees = []
    for item in data:
        if item['mentorOrMentee']== 0:
            mentors.append(item)
        else:
            mentees.append(item)
    dup_mentors = mentors.copy()
    dup_mentees = mentees.copy()
    output = []
    allpairs = []
    for i in range(len(mentors)):
        for j in range(len(mentees)):
            val = dist(mentors[i],mentees[j])
            heappush(allpairs,(val,i,j))
    length = len(allpairs)
    for x in range(length):
        tempPair = heappop(allpairs)
        if mentors[tempPair[1]] is not None and mentees[tempPair[2]] is not None:
            mentors[tempPair[1]] = None
            mentees[tempPair[2]] = None
            tempDict = {}
            tempDict['mentor'] = dup_mentors[tempPair[1]]['firstName'] +" "+ dup_mentors[tempPair[1]]['lastName']
            tempDict['mentee'] = dup_mentees[tempPair[2]]['firstName'] +" "+ dup_mentees[tempPair[2]]['lastName']
            tempDict['distance'] = tempPair[0]
            output.append(tempDict)
    return output

    #double loop to have actual matching algorithm

# Return Certain Data Based on condition
#def read_data():
    # Some Code
    #return 1  # Temporary


# Sample Test
#final_output = read_all_data()


#pickle.dump(final_output, open("save.p", "wb"))
