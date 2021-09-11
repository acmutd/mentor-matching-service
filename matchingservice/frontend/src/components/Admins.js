import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form, FormikProvider } from 'formik';
import { TextField } from '@material-ui/core';
import '../formStyles.css';
import { db } from "../firebase.js";
const Admins = () => {
    return (
        <div className='admin'>
          
            <Formik
            initialValues = {{
                url: ''
            }}
            onSubmit={async (values) => {
                fetch("/sendMatchingToSheet", {
                    method:"POST",
                    cache: "no-cache",
                    headers:{
                        "content_type":"application/json",
                    },
                    body:JSON.stringify(values.url)
                    }
                ).then(response => response.json())
                .then(data => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
              alert("The pairings have been sent");
              }}
              >
                <Form>
                <div className='labeladmin'><Button color='secondary' className='labelAdmin' onClick={() => {
                  db.collection("info")
                  .get()
                  .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    alert(data.length+" people have submitted responses")
                  });
                 }}>View Number of Submissions</Button></div>
                    <label className='labeladmin'><h1>Specify the url of the google sheets to send the matched pairs</h1></label>
                    <br className='labeladmin'></br>
                    <div className='labeladmin'><Field name = "url" label="Outlined" variant="outlined" /></div>
                    <br></br>
                    <div className='labeladmin'><Button type="submit" variant="contained" color="primary" >Send Matchings</Button></div>
                </Form>
              </Formik>
              <Formik
            initialValues = {{
                url: ''
            }}
            onSubmit={async (values) => {
                fetch("/sendMatchingToSheet", {
                    method:"POST",
                    cache: "no-cache",
                    headers:{
                        "content_type":"application/json",
                    },
                    body:JSON.stringify(values.url)
                    }
                ).then(response => response.json())
                .then(data => {
                  alert("The participant details have been sent");
                  console.log('Success:', data);
                })
                .catch((error) => {
                  alert("Oh no! There was an internal server issue, please try again later!");
                  console.error('Error:', error);
                });
              
              }}
              >
                <Form>
                    <label className='labeladmin'><h1>Specify the url of the google sheets to send the participant details to firebase</h1></label>
                    <br className='labeladmin'></br>
                    <div className='labeladmin'><Field name = "url" label="Outlined" variant="outlined" /></div>
                    <br></br>
                    <div className='labeladmin'><Button type="submit" variant="contained" color="primary" >Send Details</Button></div>
                </Form>
              </Formik>
        </div>
    )
  };

  export default Admins;