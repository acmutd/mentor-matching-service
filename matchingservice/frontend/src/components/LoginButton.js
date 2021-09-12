import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button className="menuBoxP5" onClick={() => loginWithRedirect()}>
        <h1>Log In</h1>
      </Button>
    )
  );
};

export default LoginButton;
