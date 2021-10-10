# Matching Portal Backend

This is the backend component for the matching portal. It contains the core matching algorithm which automates matching pairs of mentors and mentees in the ACM Mentor program through their written responses.


# Getting Started/Running Locally

To set up the flask server locally, follow the steps below. (You should already have python and flask installed prior to this setup process):

 - Clone this repository.
 - Create your virtual environment for python using [this link](https://flask.palletsprojects.com/en/2.0.x/installation/)
 -  Activate your virtual environment.
 -  Change your working directory back to `backend`
 -  Run  `set FLASK_APP=flaskapi.py` if your on Windows or `export FLASK_APP=flaskapi.py` if you're running macOS/Linux.
 -  Run `flask run`


Your flask server should be running on `http://127.0.0.1:5000/`.
