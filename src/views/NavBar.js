import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="rounded my-4" >
      <Container>
      <Navbar.Brand href="/">Post app</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  );
};

export default NavBar;