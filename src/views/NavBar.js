import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="rounded my-4" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
          <Navbar.Brand className="solid">
            <Nav.Link as={NavLink} to="/" className="fs-4">Blog.app</Nav.Link>
          </Navbar.Brand>
          <Nav className="fs-5">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;