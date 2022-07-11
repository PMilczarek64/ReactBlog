import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Post = ({title, author, publishedDate, shortDescription, id}) => {
  return (
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="mb-2 fw-bold">Author: <span className="fw-normal">{author}</span></p>
          <p className="mb-2 fw-bold">Published: <span className="fw-normal">{publishedDate}</span></p>
          <Card.Text>
            <p>{shortDescription}</p>
          </Card.Text>
          <Nav.Link as={NavLink} to={"/post/" + id} className="px-0"><Button variant="primary">Read more</Button></Nav.Link>
        </Card.Body>
      </Card>
  );
};


export default Post;