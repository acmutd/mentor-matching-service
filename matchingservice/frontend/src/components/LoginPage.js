import React from "react";
import '../formStyles.css';

const LoginPage = () => {
     return (
         <div 
         className = 'wholePage'
         style={{
           marginTop: 0,
           //backgroundColor: '#212020',
         }}>
             <h1>Welcome to the Mentor-Mentee Matching Portal!</h1>
             <h3>Please login to fill out your preferences for matching</h3>
         </div>
     )
}

export default LoginPage;