import React from 'react';
import '../formStyles.css';
import LogoutButton from './LogoutButton';
const ErrorPage = () => {
  return (
    <div
      className="wholePage"
      style={{
        
        backgroundColor: 'black',
        //marginRight: -20
        //backgroundColor: '#212020',
      }}
    >
      <h1 className="loginPageTitle2">
        <span>Welcome to the Mentor-Mentee Matching Portal!</span>
      </h1>
      <h3 className="loginPageSecondary2">
        <span>
          Unfotunately, this email is not associated with the ACM Mentor
          Program. Please log in with the same email you used to apply to the
          Mentor Program.{' '}
        </span>
      </h3>
      
    </div>
  );
};

export default ErrorPage;
