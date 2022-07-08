import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";


const Post = ({title, author, publishedDate, shortDescription}) => {
  return (
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="mb-2 fw-bold">Author: <span className="fw-normal">{author}</span></p>
          <p className="mb-2 fw-bold">Published: <span className="fw-normal">{publishedDate}</span></p>
          <Card.Text>
            <p>{shortDescription}</p>
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
  );
};


export default Post;