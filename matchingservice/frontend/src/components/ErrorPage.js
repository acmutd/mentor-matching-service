import React from 'react';
import '../formStyles.css';
import LogoutButton from './LogoutButton';
const ErrorPage = () => {
  return (
    <div
      className="wholePage"
      style={{
        marginTop: 0,
        backgroundColor: 'black',
        //backgroundColor: '#212020',
      }}
    >
      <h1 className="loginPageTitle">
        <span>Welcome to the Mentor-Mentee Matching Portal!</span>
      </h1>
      <h3 className="loginPageSecondary">
        <span>
          Unfotunately, this email is not associated with the ACM Mentor
          Program.Please log in with the same email you used to apply to the
          Mentor Program.{' '}
        </span>
      </h3>
      <LogoutButton />
    </div>
  );
};

export default ErrorPage;
