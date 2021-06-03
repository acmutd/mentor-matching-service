import React, { useState } from 'react'
import "../app.css";
import { db } from "../firebase.js";
//import { render } from 'react-dom';
//import { Test, QuestionGroup, Question, Option } from 'react-multiple-choice';
const Contact = () => {
    const [fname,setfirstname] = useState(" ");
    const [lname,setlastname] = useState(" ");
    const handleSubmit = (events) => {
        events.preventDefault();

        db.collection('info').add({
            fname: fname,
            lname: lname,
        })
        .then(()=>{
            alert('Your response has been submitted!');
        });
       setfirstname(' ')
       setlastname(' ')
    }
    return (
        <form className = "form" onSubmit = {handleSubmit}>
          <h1>Mentor Mentee Matching Form</h1> 

          <label>Please enter your first name</label>
          <input placeholder="firstname" value={fname} 
          onChange = {(event)=>setfirstname(event.target.value)}/>

          <label>Please enter your last name</label>
          <input placeholder="lastname"  value={lname} 
          onChange = {(event)=>setlastname(event.target.value)} />
          
         
            
          <button type="submit">Submit</button>
        </form>
    )
}

export default Contact
