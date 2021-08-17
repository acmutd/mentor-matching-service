import React from "react";
import '../formStyles.css';
import LoginButton from './LoginButton';
const LoginPage = () => {
     return (
       
         <div
         className = 'wholePage'
         style={{
           marginTop: 0,
           backgroundColor: 'black'
           //backgroundColor: '#212020',
         }}>
          <h1 className="loginPageTitle"><span>Welcome to the Mentor-Mentee Matching Portal!</span></h1>
          <h3 className="loginPageSecondary"><span>Please login to fill out your preferences for matching</span></h3>
          <LoginButton/>
         </div>
     )
}

export default LoginPage;