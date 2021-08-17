import React from 'react';
import { Formik, Field, Form } from 'formik';
import { db } from "../firebase.js";
import Button from '@material-ui/core/Button';
import '../formStyles.css';
const form = () => {
    return (
      <div
        style={{
          marginTop: 0,
          backgroundColor: 'black',
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
          q13: [],
          q14: '',
          q15: '',
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
            q14: values.q14,
            q15: values.q15
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
          values.q14 = '';
          values.q15 = '';
        }}
      >
        <Form className="formHeaders">
          <br></br>
          <label className="inputLabels" htmlFor="firstName"> First Name </label>
          <Field id="firstName" name="firstName" placeholder="First" />
          <br></br>
          <br></br>
          <label className="inputLabels" htmlFor="lastName">Last Name </label>
          <Field id="lastName" name="lastName" placeholder="Last" />
          <br></br>
          <br></br>
          <label className="inputLabels" htmlFor="email">UTD Email </label>
          <Field
            id="email"
            name="email"
            placeholder="ID@utdallas.edu"
            type="email"
          />
          <br></br>
          <br></br>
          <div className="questionTitle1" id="my-radio-group">Are you a mentor or a mentee?</div>
            <div role="group" aria-labelledby="my-radio-group" className='questionAnswer1'>
              <label>
                <Field type="radio" name="mentorOrMentee" value="Mentor" />
                <span>Mentor</span>
              </label >
              <br></br>
              <label>
                <Field type="radio" name="mentorOrMentee" value="Mentee" />
                <span>Mentee</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle2" id="my-radio-group">If you are a mentor, are you okay with  having two mentees?</div>
            <div role="group" aria-labelledby="my-radio-group" className='questionAnswer2'>
              <label className='questionAnswer2P2'>
                <Field type="radio" name="q15" value="1" />
                <span>Yes</span>
              </label >
              <br></br>
              <label className='questionAnswer2P3'>
                <Field type="radio" name="q15" value="2" />
                <span>No</span>
              </label>
              <br></br>
              <label className='questionAnswer2P4'>
                <Field type="radio" name="q15" value="3" />
                <span>I am a mentee</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle3" id="my-radio-group">Do you live on campus or off-campus?</div>
            <div role="group" aria-labelledby="my-radio-group" className="questionAnswer3">
              <label>
                <Field type="radio" name="q0" value="1"/>
                <span>On Campus</span>
              </label >
              <br></br>
              <label className='customLabel'>
                <Field type="radio" name="q0" value="2"/>
                <span>Off-Campus</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle4" id="my-radio-group">Are you an international student who would prefer being matched with another international student to learn about/help with the specifics with that?</div>
            <div role="group" aria-labelledby="my-radio-group" className="questionAnswer4">
              <label className='questionAnswer4P2'>
                <Field type="radio" name="q14" value="1"/>
                <span>Yes</span>
              </label >
              <br></br>
              <label className='questionAnswer4P3'>
                <Field type="radio" name="q14" value="2"/>
                <span>No/Not-Applicable</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle5" id="my-radio-group">Select one of the following regarding your gender preference:</div>
            <div role="group" aria-labelledby="my-radio-group" className="questionAnswer5">
              <label className="questionAnswer5P2">
                <Field type="radio" name="q9" value="1"/>
                <span>I’m a male/non-binary I prefer to be matched with a male/non-binary</span>
              </label>
              <br></br>
              <label className="questionAnswer5P3">
                <Field type="radio" name="q9" value="2"/>
                <span>I’m a female/non-binary I prefer to be matched with a female/non-binary</span>
              </label>
              <br></br>
              <label className="questionAnswer5P4">
                <Field type="radio" name="q9" value="3"/>
                <span>I don’t mind either way</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle55" id="my-radio-group">What’s the maximum number of times you want to meet with your mentor/mentee?</div>
            <div role="group" aria-labelledby="my-radio-group" className="questionAnswer55">
              <label className="questionAnswer55P2">
                <Field type="radio" name="q1" value="1"/>
                <span>Once a week</span>
              </label>
              <br></br>
              <label className="questionAnswer55P3">
                <Field type="radio" name="q1" value="2"/>
                <span>Biweekly (once every other week)</span>
              </label>
              <br></br>
              <label className="questionAnswer55P4">
                <Field type="radio" name="q1" value="3"/>
                <span>Once a month</span>
              </label>
              <br></br>
              <label className="questionAnswer55P5">
                <Field type="radio" name="q1" value="4"/>
                <span>Up to the mentor/mentee</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle6" id="checkbox-group">What time of the day would you prefer to meet your mentor/mentee? <br></br>(Select all that apply)</div>
            <div role="group" aria-labelledby="checkbox-group" className="questionAnswer6">
              <label className="questionAnswer6P2">
                <Field type="checkbox" name="q6" value="1"/>
                <span>Morning</span>
              </label>
              <br></br>
              <label className="questionAnswer6P3">
                <Field type="checkbox" name="q6" value="2"/>
                <span>Afternoon</span>
              </label>
              <br></br>
              <label className="questionAnswer6P2">
                <Field type="checkbox" name="q6" value="3"/>
                <span>Evening</span>
              </label>
              <br></br>
              <label className="questionAnswer6P4">
                <Field type="checkbox" name="q6" value="4"/>
                <span>Night</span>
              </label>
              <br></br>
              <label className="questionAnswer6P5">
                <Field type="checkbox" name="q6" value="5"/>
                <span>Any time works!</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle77" id="my-radio-group">What time during the week do you want to meet with your mentor/mentee?</div>
            <div role="group" aria-labelledby="my-radio-group" className="questionAnswer77">
              <label className="questionAnswer77P2">
                <Field type="radio" name="q7" value="1"/>
                <span>Weekdays</span>
              </label>
              <br></br>
              <label className="questionAnswer77P2">
                <Field type="radio" name="q7" value="2"/>
                <span>Weekends</span>
              </label>
              <br></br>
              <label className="questionAnswer77P3">
                <Field type="radio" name="q7" value="3" />
                <span>Either works</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle7" id="checkbox-group">What kinds of things would you want to do with your mentee/mentor?<br></br>(Select all that apply)</div>
            <div className="questionAnswer8" role="group" aria-labelledby="checkbox-group">
              <label className="questionAnswer8P2"> 
                <Field type="checkbox" name="q8" value="1"/>
                <span>Get food</span>
              </label>
              <br></br>
              <label className="questionAnswer8P3">
                <Field type="checkbox" name="q8" value="2"/>
                <span>Study together</span>
              </label>
              <br></br>
              <label className="questionAnswer8P4">
                <Field type="checkbox" name="q8" value="3"/>
                <span>Get/Give academic advice</span>
              </label>
              <br></br>
              <label className="questionAnswer8P5">
                <Field type="checkbox" name="q8" value="4"/>
                <span>Just talk about life</span>
              </label>
              <br></br>
              <label className="questionAnswer8P6">
                <Field type="checkbox" name="q8" value="5"/>
                <span>Attend events together</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle4" id="my-radio-group">How would you best describe your character?</div>
            <div className='questionAnswer9' role="group" aria-labelledby="my-radio-group">
              <label className='questionAnswer9P2'>
                <Field type="radio" name="q11" value="1"/>
                <span>Shy and reserved</span>
              </label>
              <br></br>
              <label className='questionAnswer9P3'>
                <Field type="radio" name="q11" value="2"/>
                <span>Expressive, open, and chatty</span>
              </label>
              <br></br>
              <label className='questionAnswer9P4'>
                <Field type="radio" name="q11" value="3"/>
                <span>Humorous, but reserved</span>
              </label>
              <br></br>
              <label className='questionAnswer9P5'>
                <Field type="radio" name="q11" value="4"/>
                <span>Easy-going</span>
              </label>
              <br></br>
              <label className='questionAnswer9P6'>
                <Field type="radio" name="q11" value="5"/>
                <span>Other</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle1" id="my-radio-group">Do you like video games?</div>
            <div className='questionAnswer10' role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="q12" value="1"/>
                <span>Yes</span>
              </label>
              <br></br>
              <label>
                <Field type="radio" name="q12" value="2"/>
                <span>No</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle1" id="my-radio-group">Are you a(n)</div>
            <div className="questionAnswer11" role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="q2" value="1"/>
                <span>Introvert</span>
              </label>
              <br></br>
              <label>
                <Field type="radio" name="q2" value="2"/>
                <span>Extrovert</span>
              </label>
              <br></br>
              <label>
                <Field type="radio" name="q2" value="3"/>
                <span>Ambivert</span>
              </label>
            </div>

            <br></br>
            <div className="questionTitle12" id="checkbox-group">Which sports have you played before/interested in?<br></br>(Select all that apply)</div>
            <div className="questionAnswer12" role="group" aria-labelledby="checkbox-group">
              <label className='questionAnswer12P2'>
                <Field type="checkbox" name="q13" value="1"/>
                <span>Basketball</span>
              </label>
              <br></br>
              <label className='questionAnswer12P3'>
                <Field type="checkbox" name="q13" value="2"/>
                <span>Football</span>
              </label>
              <br></br>
              <label className='questionAnswer12P3'>
                <Field type="checkbox" name="q13" value="3"/>
                <span>Baseball</span>
              </label>
              <br></br>
              <label className='questionAnswer12P4'>
                <Field type="checkbox" name="q13" value="4"/>
                <span>Soccer</span>
              </label>
              <br></br>
              <label className='questionAnswer12P4'>
                <Field type="checkbox" name="q13" value="5"/>
                <span>Tennis</span>
              </label>
              <br></br>
              <label className='questionAnswer12P4'>
                <Field type="checkbox" name="q13" value="6"/>
                <span>Other</span>
              </label>
            </div>

  
            <br></br>
            <div id="checkbox-group" className="questionTitle13">What parts of Computer Science are you interested in?<br></br>(Select all that apply)</div>
            <div role="group" aria-labelledby="checkbox-group" className="questionAnswer13">
              <label className='questionAnswer13P2'>
                <Field type="checkbox" name="q3" value="1"/>
                <span>Web/Mobile Development</span>
              </label>
              <br></br>
              <label className='questionAnswer13P3'>
                <Field type="checkbox" name="q3" value="2"/>
                <span>Cloud Computing</span>
              </label>
              <br></br>
              <label className='questionAnswer13P4'>
                <Field type="checkbox" name="q3" value="3"/>
                <span>Artificial Intelligence</span>
              </label>
              <br></br>
              <label className='questionAnswer13P5'>
                <Field type="checkbox" name="q3" value="4"/>
                <span>Data Science</span>
              </label>
              <br></br>
              <label className='questionAnswer13P6'>
                <Field type="checkbox" name="q3" value="5"/>
                <span>Cybersecurity</span>
              </label>
              <br></br>
              <label className='questionAnswer13P7'>
                <Field type="checkbox" name="q3" value="6"/>
                <span>Game Development</span>
              </label>
              <br></br>
              <label className='questionAnswer13P8'>
                <Field type="checkbox" name="q3" value="7"/>
                <span>Computer Vision</span>
              </label>
              <br></br>
              <label className='questionAnswer13P9'>
                <Field type="checkbox" name="q3" value="8"/>
                <span>Theoretical Computing</span>
              </label>
              <br></br>
              <label className='questionAnswer13P10'>
                <Field type="checkbox" name="q3" value="9"/>
                <span>Computer Engineering/Hardware</span>
              </label>
              <br></br>
              <label className='questionAnswer13P11'>
                <Field type="checkbox" name="q3" value="10"/>
                <span>Other</span>
              </label>
            </div>
  
            <br></br>
            <div className="questionTitle14" id="checkbox-group">Are you interested in/ involved with any of the following?<br></br>(Select all that apply)</div>
            <div className="questionAnswer14" role="group" aria-labelledby="checkbox-group">
              <label className='questionAnswer14P2'>
                <Field type="checkbox" name="q4" value="1"/>
                <span>Industry/ Internships</span>
              </label>
              <br></br>
              <label className='questionAnswer14P3'>
                <Field type="checkbox" name="q4" value="2"/>
                <span>Fast Track</span>
              </label>
              <br></br>
              <label className='questionAnswer14P4'>
                <Field type="checkbox" name="q4" value="3"/>
                <span>Research/PhD</span>
              </label>
              <br></br>
              <label className='questionAnswer14P5'>
                <Field type="checkbox" name="q4" value="4"/>
                <span>CS^2</span>
              </label>
              <br></br>
              <label className='questionAnswer14P6'>
                <Field type="checkbox" name="q4" value="5"/>
                <span>Pre-med</span>
              </label>
            </div>   
  
            <br></br>
            <div className="questionTitle15" id="checkbox-group"> Which of these do you want to help with, or want help in?<br></br>(Select all that apply)</div>
            <div className="questionAnswer15" role="group" aria-labelledby="checkbox-group">
              <label className='questionAnswer15P2'>
                <Field type="checkbox" name="q5" value="1"/>
                <span>Joining new, interesting clubs (i.e. Cybersecurity club, SWE, Student Government, etc.)</span>
              </label>
              <br></br>
              <label className='questionAnswer15P3'>
                <Field type="checkbox" name="q5" value="2"/>
                <span>Entering competitions (i.e. Big Idea Competition, Capital One Design Challenge, etc.)</span>
              </label>
              <br></br>
              <label className='questionAnswer15P4'>
                <Field type="checkbox" name="q5" value="3"/>
                <span>Getting into research</span>
              </label>
              <br></br>
              <label className='questionAnswer15P5'>
                <Field type="checkbox" name="q5" value="4" />
                <span>Developing new skills (Python, Azure, Ruby on Rails, etc.)</span>
              </label>
              <br></br>
              <label className='questionAnswer15P6'>
                <Field type="checkbox" name="q5" value="5"/>
                <span>Improving grades and developing time management</span>
              </label>
              <br></br>
              <label className='questionAnswer15P7'>
                <Field type="checkbox" name="q5" value="6"/>
                <span>Learning about/joining programs (i.e. ACM projects, Clark summer research program, etc.)</span>
              </label>
              <br></br>
              <label className='questionAnswer15P8'>
                <Field type="checkbox" name="q5" value="7"/>
                <span>Getting a tech related internship, co-op, or job (involves resumes, networking, interviewing)</span>
              </label>
              <br></br>
              <label className='questionAnswer15P9'>
                <Field type="checkbox" name="q5" value="8"/>
                <span>Understanding different CS career paths</span>
              </label>
              <br></br>
              <label className='questionAnswer15P10'>
                <Field type="checkbox" name="q5" value="9"/>
                <span>Facilitation of connections, networking, or sponsorship</span>
              </label>
              <br></br>
              <label className='questionAnswer15P11'>
                <Field type="checkbox" name="q5" value="10"/>
                <span>Course guidance (professors, topics, etc)</span>
              </label>
            </div>       

            <br></br>
            <div className="questionTitle16" id="checkbox-group">What other activities are you interested in joining?<br></br>(Select all that apply)</div>
            <div className="questionAnswer16" role="group" aria-labelledby="checkbox-group">
              <label className='questionAnswer16P2'>
                <Field type="checkbox" name="q10" value="1"/>
                <span>Service/volunteering</span>
              </label>
              <br></br>
              <label className='questionAnswer16P3'>
                <Field type="checkbox" name="q10" value="2"/>
                <span>Academic</span>
              </label>
              <br></br>
              <label className='questionAnswer16P4'>
                <Field type="checkbox" name="q10" value="3"/>
                <span>Greek Life</span>
              </label>
              <br></br>
              <label className='questionAnswer16P5'>
                <Field type="checkbox" name="q10" value="4" />
                <span>Intramural Sports</span>
              </label>
              <br></br>
              <label className='questionAnswer16P6'>
                <Field type="checkbox" name="q10" value="5" />
                <span>LGBTQ+</span>
              </label>
            </div>

            <br></br>
            <div className="button"><Button type="submit" variant="contained"  >Submit</Button></div>
           </Form>
      </Formik>
      </div>
    );
  };

export default form;