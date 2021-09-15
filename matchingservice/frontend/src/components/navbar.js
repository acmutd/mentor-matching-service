import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import '../formStyles.css';
const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated && user.email.includes('@utdallas.edu'))
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <img
            src="Education-logo.svg"
            width="150"
            height="50"
            className="icon2"
            alt="ACM Education"
          />
        </Navbar.Brand>
        <Navbar.Brand className="barName">
          <span>Matching Portal</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuBox" />
        <Nav className="mr-auto">
            <LinkContainer to="/">
            <Nav.Link>
                {' '}
                <LogoutButton/>{' '}
              </Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>
    );
  else if (isAuthenticated && user.email.includes('education@acmutd.co'))
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <img src="Education-logo.svg" className="icon2" alt="ACM Education" />
        </Navbar.Brand>
        <Navbar.Brand className="barName">
          <h1>Matching Portal</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuBox" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link className="menuBoxP2">
                <span>Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link className="menuBoxP4">
                <span>Admin</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>
                {' '}
                <LogoutButton />{' '}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  else
    return (
      <Navbar bg="dark" expand="lg" >
        <Navbar.Brand>
          <img
            src="Education-logo.svg"
            width="200"
            height="50"
            className="icon"
            alt="ACM Education"
          />
        </Navbar.Brand>
       
      </Navbar>
    );
};

export default Header;
