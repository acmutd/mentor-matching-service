from flask import Flask, request, json
from display import *
# import firebase_test
import pickle

app = Flask(__name__)


@app.route('/testing', methods=['GET', 'POST'])
def sample():
    return "tested"


@app.route('/getNames', methods=["GET"])
def names_list():
    data = clustering()
    #names_list1 = pickle.load(open("save.p", "rb"))
    #print(names_list1)
    return json.dumps(data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=105)
