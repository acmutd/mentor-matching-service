import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const Header = () => {
  const {user,isAuthenticated} = useAuth0();
    if (!isAuthenticated)
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand>Matching Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link> <LoginButton /> </Nav.Link>
          </LinkContainer>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    ) 
    else if (isAuthenticated && user.email.includes('@gmail.com')) 
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand>Matching Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link> <LogoutButton /> </Nav.Link>
          </LinkContainer>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    ) 
    else if (isAuthenticated && user.email.includes('@acmutd.co'))
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand>Matching Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin">
          <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
          <Nav.Link> <LogoutButton /> </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
}

export default Header