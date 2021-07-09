import React from 'react';
import { Formik, Field, Form } from 'formik';
import { db } from "../firebase.js";
import Button from '@material-ui/core/Button';
const form = () => {
    return (
      <div
      className = 'wholePage'
        //style={{
          //marginTop: 0,
          //backgroundColor: '#212020',
        //}}
        >
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
                <Field type="radio" name="q1" value="1" className='box'/>
                Once a week
              </label>
              <br></br>
              <label className='customLabelFour'>
                <Field type="radio" name="q1" value="2" className='box'/>
                Biweekly(once every other week)
              </label>
              <br></br>
              <label className='customLabelTwo'>
                <Field type="radio" name="q1" value="3" className='box'/>
                Once a month
              </label>
              <br></br>
              <label className='customLabelFour'>
                <Field type="radio" name="q1" value="4" className='box'/>
                Up to the mentor/mentee
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
            <div id="checkbox-group" className="checkbox">What parts of Computer Science are you interested in?</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className='customLabelFour'>
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
              <label className='customLabelFour'>
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
                Developing new skills (Python, Azure, Ruby on Rails, etc.)
              </label>
              <br></br>
              <label className='customLabelFive'>
                <Field type="checkbox" name="q5" value="5" className='box'/>
                Improving grades and time management
              </label>
              <br></br>
              <label className='customLabelSix'>
                <Field type="checkbox" name="q5" value="6" className='box2'/>
                Learning about/joining programs (i.e. ACM projects, Clark summer research program, etc.)
              </label>
              <br></br>
              <label className='customLabelSix'>
                <Field type="checkbox" name="q5" value="7" className='box'/>
                Getting a tech related internship, co-op, or job (resumes, networking, interviewing)
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
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Form>
      </Formik>
      </div>
    );
  };

export default form;