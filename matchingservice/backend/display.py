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
        #processing q0
        temp = entry['q0']
        entry['q0'] = int(temp)
        #processing q9
        temp = entry['q9']
        entry['q9'] = int(temp)
        #processing q7
        temp = entry['q7']
        entry['q7'] = int(temp)
        #processing q11
        temp = entry['q11']
        entry['q11'] = int(temp)
        #processing q12
        temp = entry['q12']
        entry['q12'] = int(temp)

    return list


def similarity(x,y):
    count = 0
    for i in x:
        for j in y:
            if int(i)==int(j):
                count = count + 1
    if count==0:
        return 0.75
    return float(count)


def dist(a,b):
    q0diff = abs(a['q0']-b['q0']) ** 2
    q1diff = abs(a['q1']-b['q1']) ** 2
    q2diff = abs(a['q2']-b['q2']) ** 2
    q7diff = abs(a['q7']-b['q7']) ** 2
    q9diff = abs(a['q9']-b['q9']) ** 2
    q11diff = abs(a['q11']-b['q11']) ** 2
    q12diff = abs(a['q12']-b['q12']) ** 2

    q3diff = 10/similarity(a['q3'],b['q3']) ** 2
    q4diff = 5/similarity(a['q4'],b['q4']) ** 2
    q5diff = 10/similarity(a['q5'],b['q5']) ** 2
    q6diff = 5/similarity(a['q6'],b['q6']) ** 2
    q8diff = 5/similarity(a['q8'],b['q8']) ** 2
    q10diff = 5/similarity(a['q10'],b['q10']) ** 2
    q13diff = 6/similarity(a['q13'],b['q13']) ** 2

    sum = q1diff+q2diff+q3diff+q4diff+q5diff+q6diff+q7diff+q8diff+q9diff+q10diff+q11diff+q12diff+q13diff
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
