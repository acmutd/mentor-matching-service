import React from 'react';
import { Formik, Field, Form } from 'formik';
import { db } from "../firebase.js";
import Button from '@material-ui/core/Button';
import '../formStyles.css';
const form = () => {
    return (
      <div
      className = 'wholePage'
        style={{
          marginTop: 0,
          backgroundColor: '#212020',
        }}
        >
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mentorOrMentee: '',
          q0: '',
          q6: [],
          q7: '',
          q8: [],
          q11: '',
          q12: '',
          q9: '',
          q1: '',
          q2: '',
          q3: [],
          q4: [],
          q5: [],
          q10: [],
          q13: []
        }}
        onSubmit={async (values) => {
          db.collection('info').add({
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            mentorOrMentee: values.mentorOrMentee,
            q0: values.q0,
            q9: values.q9,
            q6: values.q6,
            q7: values.q7,
            q8: values.q8,
            q1: values.q1,
            q2: values.q2,
            q3: values.q3,
            q4: values.q4,
            q5: values.q5,
            q10: values.q10,
            q11: values.q11,
            q12: values.q12,
            q13: values.q13,
          })
          //await new Promise((r) => setTimeout(r, 500));
          alert("Your response was submitted!");
          values.email = '';
          values.firstName='';
          values.lastName = '';
          values.mentorOrMentee = '';
          values.q0 = '';
          values.q1 = '';
          values.q2 = '';
          values.q3 = [];
          values.q4 = [];
          values.q5 = [];
          values.q6 = [];
          values.q7 = '';
          values.q8 = [];
          values.q9 = '';
          values.q10 = [];
          values.q11 = '';
          values.q12 = '';
          values.q13 = [];
        }}
      >
        <Form className='formHeaders'>
          <br></br>
          <label className='label' htmlFor="firstName"> First Name  </label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <br></br>
          <br></br>
          <label className='label' htmlFor="lastName">Last Name </label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br></br>
          <br></br>
          <label className='label' htmlFor="email">UTD Email </label>
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
            <div id="my-radio-group">Do you live on campus or off-campus?</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label className='customLabel'>
                <Field type="radio" name="q0" value="1" className='box' />
                On Campus
              </label >
              <br></br>
              <label className='customLabel'>
                <Field type="radio" name="q0" value="2" className='box' />
                Off-Campus
              </label>
            </div>

            <br></br>
            <div id="my-radio-group">Select one of the following regarding your gender preference:</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label className='customLabel'>
                <Field type="radio" name="q9" value="1" className='box' />
                I’m a male/non-binary I prefer to be matched with a male/non-binary
              </label >
              <br></br>
              <label className='customLabel'>
                <Field type="radio" name="q9" value="2" className='box' />
                I’m a female/non-binary I prefer to be matched with a female/non-binary
              </label>
              <br></br>
              <label className='customLabel'>
                <Field type="radio" name="q9" value="3" className='box' />
                I don’t mind either way
              </label>
            </div>

            <br></br>
            <div id="my-radio-group">What’s the maximum number of times you want to meet with your mentor/mentee?</div>
            <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
              <label className='customLabelTwo'>
                <Field type="radio" name="q1" value="1" className='box'/>
                Once a week
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q1" value="2" className='box'/>
                Biweekly(once every other week)
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q1" value="3" className='box'/>
                Once a month
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q1" value="4" className='box'/>
                Up to the mentor/mentee
              </label>
            </div>

            <br></br>
            <div id="checkbox-group">What time of the day would you prefer to meet your mentor/mentee?</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q6" value="1" className='box'/>
                Morning
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q6" value="2" className='box'/>
                Afternoon
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q6" value="3" className='box'/>
                Evening
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q6" value="4" className='box' />
                Night
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q6" value="5" className='box'/>
                Any time works!
              </label>
            </div>

            <br></br>
            <div id="my-radio-group">What’s the maximum number of times you want to meet with your mentor/mentee?</div>
            <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
              <label className='customLabelTwo'>
                <Field type="radio" name="q7" value="1" className='box'/>
                Weekdays
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q7" value="2" className='box'/>
                Weekends
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q7" value="3" className='box'/>
                Either works
              </label>
            </div>

            <br></br>
            <div id="checkbox-group">What kinds of things would you want to do with your mentee/mentor?</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q8" value="1" className='box'/>
                Get food
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q8" value="2" className='box'/>
                Study together
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q8" value="3" className='box'/>
                Get/Give academic advice
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q8" value="4" className='box' />
                Just talk about life
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q8" value="5" className='box'/>
                Attend events together
              </label>
            </div>

            <br></br>
            <div id="my-radio-group">How would you best describe your character?</div>
            <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
              <label className='customLabelTwo'>
                <Field type="radio" name="q11" value="1" className='box'/>
                Shy and reserved
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q11" value="2" className='box'/>
                Expressive, open, and chatty
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q11" value="3" className='box'/>
                Humorous, but reserved
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q11" value="4" className='box'/>
                Easy-going
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q11" value="5" className='box'/>
                Other
              </label>
            </div>

            <br></br>
            <div id="my-radio-group">Do you like video games?</div>
            <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
              <label className='customLabelTwo'>
                <Field type="radio" name="q12" value="1" className='box'/>
                Yes
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q12" value="2" className='box'/>
                No
              </label>
            </div>

            <br></br>
            <div id="my-radio-group">Are you a(n)</div>
            <div className='formQuestions' role="group" aria-labelledby="my-radio-group">
              <label className='customLabelTwo'>
                <Field type="radio" name="q2" value="1" className='box'/>
                Introvert
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q2" value="2" className='box'/>
                Extrovert
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q2" value="3" className='box'/>
                Ambivert
              </label>
            </div>

            <br></br>
            <div id="checkbox-group">Which sports have you played before/interested in?</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q13" value="1" className='box'/>
                Basketball
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q13" value="2" className='box'/>
                Football
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q13" value="3" className='box'/>
                Baseball
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q13" value="4" className='box' />
                Soccer
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q13" value="5" className='box'/>
                Tennis
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q13" value="6" className='box'/>
                Other
              </label>
            </div>

  
            <br></br>
            <div id="checkbox-group" className="checkbox">What parts of Computer Science are you interested in?</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="1" className='box'/>
                Web/Mobile Development
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="2" className='box'/>
                Cloud Computing
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="3" className='box'/>
                Artificial Intelligence
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="4" className='box'/>
                Data Science
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="5" className='box'/>
                Cybersecurity
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="6" className='box'/>
                Game Development
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="7" className='box'/>
                Computer Vision
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="8" className='box'/>
                Theoretical Computing
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q3" value="9" className='box'/>
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
                <Field type="checkbox" name="q4" value="1" className='box'/>
                Industry/ Internships
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q4" value="2" className='box'/>
                Fast Track
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q4" value="3" className='box'/>
                Research/PhD
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q4" value="4" className='box' />
                CS^2
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q4" value="5" className='box'/>
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
                &nbsp; &nbsp; &nbsp;Developing new skills (Python, Azure, Ruby on Rails, etc.)
              </label>
              <br></br>
              <label className='customLabelSix'>
                <Field type="checkbox" name="q5" value="5" className='box'/>
                 &nbsp; &nbsp; &nbsp;Improving grades and developing time management
              </label>
              <br></br>
              <label className='customLabelSix'>
                <Field type="checkbox" name="q5" value="6" className='box2'/>
                Learning about/joining programs (i.e. ACM projects, Clark summer research program, etc.)
              </label>
              <br></br>
              <label className='customLabelSix'>
                <Field type="checkbox" name="q5" value="7" className='box'/>
                Getting a tech related internship, co-op, or job (involves resumes, networking, interviewing)
              </label>
              <br></br>
              <label className='customLabelFive'>
                <Field type="checkbox" name="q5" value="8" className='box'/>
                Understanding different CS career paths
              </label>
              <br></br>
              <label className='customLabelSix'>
                <Field type="checkbox" name="q5" value="9" className='box2'/>
                Facilitation of connections, networking, or sponsorship
              </label>
              <br></br>
              <label className='customLabelFive'>
                <Field type="checkbox" name="q5" value="10" className='box'/>
                Course guidance (professors, topics, etc)
              </label>
            </div>       

            <br></br>
            <div id="checkbox-group">What other activities are you interested in joining?</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q10" value="1" className='box'/>
                Service/volunteering
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q10" value="2" className='box'/>
                Academic
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q10" value="3" className='box'/>
                Greek Life
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q10" value="4" className='box' />
                Intramural Sports
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="checkbox" name="q10" value="5" className='box'/>
                LGBTQ+
              </label>
            </div>

            <br></br>

            <Button type="submit" variant="contained" color="primary" className='button'>Submit</Button>
        </Form>
      </Formik>
      </div>
    );
  };

export default form;