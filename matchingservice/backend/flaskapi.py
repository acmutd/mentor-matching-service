from flask import Flask, request, json
import display

app = Flask(__name__)


@app.route('/testing', methods=['GET'])
def sample():
    return "tested"


#@app.route('/getNames', methods=["GET"])
#def names_list():
    #return display.FirebaseData.get_completenames(self="")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=105)
