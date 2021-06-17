import './App.css';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { db } from "./firebase.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        mentorOrMentee: '',
        q1: '',
        q2: '',
        q3: [],
        q4: [],
        q5: [],
      }}
      onSubmit={async (values) => {
        db.collection('info').add({
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          mentorOrMentee: values.mentorOrMentee,
          q1: values.q1,
          q2: values.q2,
          q3: values.q3,
          q4: values.q4,
          q5: values.q5,
        })
        //await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        values.email = '';
        values.firstName='';
        values.lastName = '';
        values.mentorOrMentee = '';
        values.q1 = '';
        values.q2 = '';
        values.q3 = [];
        values.q4 = [];
        values.q5 = [];
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <br></br>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <br></br>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br></br>
        <br></br>
        <div id="my-radio-group">Are you a mentor or a mentee?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="mentorOrMentee" value="Mentor" />
              Mentor
            </label>
            <br></br>
            <label>
              <Field type="radio" name="mentorOrMentee" value="Mentee" />
              Mentee
            </label>
          </div>

          <br></br>
          <div id="my-radio-group">What’s the maximum number of times you want to meet with your mentor/mentee?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="q1" value="One" />
              Once a week
            </label>
            <br></br>
            <label>
              <Field type="radio" name="q1" value="Two" />
              Biweekly(once every other week)
            </label>
            <br></br>
            <label>
              <Field type="radio" name="q1" value="Three" />
              Once a month
            </label>
            <br></br>
            <label>
              <Field type="radio" name="q1" value="Four" />
              Up to the mentor/mentee
            </label>
          </div>
          <br></br>
          <div id="my-radio-group">Are you a(n)</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="q2" value="One" />
              Introvert
            </label>
            <br></br>
            <label>
              <Field type="radio" name="q2" value="Two" />
              Extrovert
            </label>
            <br></br>
            <label>
              <Field type="radio" name="q2" value="Three" />
              Ambivert
            </label>
          </div>

          <br></br>
          <div id="checkbox-group" className="checkbox">What parts of Computer Science are you interested in?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="q3" value="One" />
              Web/Mobile Development
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Two" />
              Cloud Computing
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Three" />
              Artificial Intelligence
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Four" />
              Data Science
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Five" />
              Cybersecurity
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Six" />
              Game Development
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Seven" />
              Computer Vision
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Eight" />
              Theoretical Computing
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="Nine" />
              Computer Engineering/Hardware
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q3" value="10" />
              Other
            </label>
          </div>

          <br></br>
          <div id="checkbox-group">Are you interested in/ involved with any of the following?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="q4" value="One" />
              Industry/ Internships
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q4" value="Two" />
              Fast Track
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q4" value="Three" />
              Research/PhD
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q4" value="Four" />
              CS^2
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q4" value="Five" />
              Pre-med
            </label>
          </div>   

          <br></br>
          <div id="checkbox-group"> Which of these do you want to help with, or want help in?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="q5" value="1" />
              Joining new, interesting clubs (i.e. Cybersecurity club, SWE, Student Government, etc.)
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="2" />
              Entering competitions (i.e. Big Idea Competition, Capital One Design Challenge, etc.)
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="3" />
              Getting into research
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="4" />
              Developing new skills (Python, Azure, Ruby on Rails, etc.)
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="5" />
              Improving grades and time management
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="6" />
              Improving grades and time management
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="7" />
              Learning about/joining programs (i.e. ACM projects, Clark summer research program, etc.)
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="8" />
              Getting a tech related internship, co-op, or job (resumes, networking, interviewing)
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="9" />
              Understanding different CS career paths
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="10" />
              Facilitation of connections, networking, or sponsorship
            </label>
            <br></br>
            <label>
              <Field type="checkbox" name="q5" value="11" />
              Course guidance (professors, topics, etc)
            </label>
          </div>       
          <br></br>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
};

const Admin = () => {
  return (
    <div>
      <p>Admin side</p>
    </div>
  );
};


function App() {
  return (
    <div>
    <h1>Mentor Mentee Matching Survey</h1>
    
    <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                  </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/admin" component={Admin} />
              </div>
        </Router>



    
  </div>
  );
}

export default App;
