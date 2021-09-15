import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import '../formStyles.css';
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button className="errorPageLogout" onClick={() => logout()}>
        <h1 >Log Out</h1>
      </Button>
    )
  );
};

export default LogoutButton;
