import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form, FormikProvider } from 'formik';
import { TextField } from '@material-ui/core';
import '../formStyles.css';
const Admins = () => {
    return (
        <div>
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
                    <label className='labeladmin'>Specify the url of the google sheets to send the matched pairs</label>
                    <br></br>
                    <Field name = "url" label="Outlined" variant="outlined" />
                    <br></br>
                    <Button type="submit" variant="contained" color="primary" className='button'>Send Matchings</Button>
                </Form>
              </Formik>
        </div>
    )
  };

  export default Admins;