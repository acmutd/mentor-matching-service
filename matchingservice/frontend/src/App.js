import './App.css';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { db } from "./firebase.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './formStyles.css'
const Home = () => {
  return (
    <div
    className = 'wholePage'
      style={{
        marginTop: 0,
        backgroundColor: '#212020',
      }}>
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
      <Form className='formHeaders'>
        <label className='label' htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <br></br>
        <label className='label' htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <br></br>
        <label className='label' htmlFor="email">Email</label>
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
            <label className='customLabel'>
              <Field type="radio" name="mentorOrMentee" value="Mentor" className='box' />
              Mentor
            </label >
            <br></br>
            <label className='customLabel'>
              <Field type="radio" name="mentorOrMentee" value="Mentee" className='box' />
              Mentee
            </label>
          </div>

          <br></br>
          <div id="my-radio-group">What’s the maximum number of times you want to meet with your mentor/mentee?</div>
          <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
            <label className='customLabelTwo'>
              <Field type="radio" name="q1" value="One" className='box'/>
              Once a week
            </label>
            <br></br>
            <label className='customLabelFour'>
              <Field type="radio" name="q1" value="Two" className='box'/>
              Biweekly(once every other week)
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="radio" name="q1" value="Three" className='box'/>
              Once a month
            </label>
            <br></br>
            <label className='customLabelFour'>
              <Field type="radio" name="q1" value="Four" className='box'/>
              Up to the mentor/mentee
            </label>
          </div>
          <br></br>
          <div id="my-radio-group">Are you a(n)</div>
          <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
            <label className='customLabelTwo'>
              <Field type="radio" name="q2" value="One" className='box'/>
              Introvert
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="radio" name="q2" value="Two" className='box'/>
              Extrovert
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="radio" name="q2" value="Three" className='box'/>
              Ambivert
            </label>
          </div>

          <br></br>
          <div id="checkbox-group" className="checkbox">What parts of Computer Science are you interested in?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label className='customLabelFour'>
              <Field type="checkbox" name="q3" value="One" className='box'/>
              Web/Mobile Development
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Two" className='box'/>
              Cloud Computing
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Three" className='box'/>
              Artificial Intelligence
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Four" className='box'/>
              Data Science
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Five" className='box'/>
              Cybersecurity
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Six" className='box'/>
              Game Development
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Seven" className='box'/>
              Computer Vision
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="Eight" className='box'/>
              Theoretical Computing
            </label>
            <br></br>
            <label className='customLabelFour'>
              <Field type="checkbox" name="q3" value="Nine" className='box'/>
              Computer Engineering/Hardware
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q3" value="10" className='box'/>
              Other
            </label>
          </div>

          <br></br>
          <div id="checkbox-group">Are you interested in/ involved with any of the following?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q4" value="One" className='box'/>
              Industry/ Internships
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q4" value="Two" className='box'/>
              Fast Track
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q4" value="Three" className='box'/>
              Research/PhD
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q4" value="Four" className='box' />
              CS^2
            </label>
            <br></br>
            <label className='customLabelTwo'>
              <Field type="checkbox" name="q4" value="Five" className='box'/>
              Pre-med
            </label>
          </div>   

          <br></br>
          <div id="checkbox-group"> Which of these do you want to help with, or want help in?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label className='customLabelSix'>
              <Field type="checkbox" name="q5" value="1" className='box2'/>
              Joining new, interesting clubs (i.e. Cybersecurity club, SWE, Student Government, etc.)
            </label>
            <br></br>
            <label className='customLabelSix'>
              <Field type="checkbox" name="q5" value="2" className='box2'/>
              Entering competitions (i.e. Big Idea Competition, Capital One Design Challenge, etc.)
            </label>
            <br></br>
            <label className='customLabelFive'>
              <Field type="checkbox" name="q5" value="3" className='box'/>
              Getting into research
            </label>
            <br></br>
            <label className='customLabelFive'>
              <Field type="checkbox" name="q5" value="4" className='box'/>
              Developing new skills (Python, Azure, Ruby on Rails, etc.)
            </label>
            <br></br>
            <label className='customLabelFive'>
              <Field type="checkbox" name="q5" value="5" className='box'/>
              Improving grades and time management
            </label>
            <br></br>
            <label className='customLabelFive'>
              <Field type="checkbox" name="q5" value="6" className='box'/>
              Improving grades and time management
            </label>
            <br></br>
            <label className='customLabelSix'>
              <Field type="checkbox" name="q5" value="7" className='box2'/>
              Learning about/joining programs (i.e. ACM projects, Clark summer research program, etc.)
            </label>
            <br></br>
            <label className='customLabelSix'>
              <Field type="checkbox" name="q5" value="8" className='box'/>
              Getting a tech related internship, co-op, or job (resumes, networking, interviewing)
            </label>
            <br></br>
            <label className='customLabelFive'>
              <Field type="checkbox" name="q5" value="9" className='box'/>
              Understanding different CS career paths
            </label>
            <br></br>
            <label className='customLabelSix'>
              <Field type="checkbox" name="q5" value="10" className='box2'/>
              Facilitation of connections, networking, or sponsorship
            </label>
            <br></br>
            <label className='customLabelFive'>
              <Field type="checkbox" name="q5" value="11" className='box'/>
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
      <p className='formHeaders'>Admin side</p>
    </div>
  );
};


function App() {
  return (
    <div
    className = 'wholePageTwo'
      style={{
        backgroundColor: '#212020',
      }}>
    <h1 className='primary'>Mentor Mentee Matching Survey</h1>
    
    <Router>
              <div>
                <nav>
                  <ul className='linkSpacing'>
                    <li className='linkStyle'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='linkStyle'>
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
