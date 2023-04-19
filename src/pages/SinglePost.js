import React, { useState } from "react";
import { getPostById } from "../redux/postsRedux";
import { useSelector } from "react-redux";
import { useParams } from 'react-router';
import { NavLink, Navigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Nav from 'react-bootstrap/Nav';
import RemoveConfirm from "../views/RemoveConfirm";
import striptags from "striptags";



const SinglePost = () => {
  const { postId } = useParams();
  const postData = useSelector(state => getPostById(state, postId));

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  if(!postData) return <Navigate to="/" />
  else

  return (
    <div>
      <RemoveConfirm showModal={showModal} handleClose={handleClose} id={postData.id} />
      <Card style={{ border: 'none' }} className="mar-x-post">
        <div className="d-flex justify-content-between">
          <Card.Title className="p-2 mb-0"><h2>{postData.title}</h2></Card.Title>
          <div className="d-flex">
            <Nav.Link as={NavLink} to={"/post/edit/" + postId} className="px-0">
              <Button variant="outline-info">Edit</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/post/" + postId} className="ps-2">
              <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            </Nav.Link>
          </div>
        </div>
        <Card.Body>
          <p className="mb-2 fw-bold">Author: <span className="fw-normal">{postData.author}</span></p>
          <p className="mb-2 fw-bold">Published: <span className="fw-normal">{postData.publishedDate}</span></p>
          <p className="mb-2 fw-bold">Category: <span className="fw-normal">{postData.category}</span></p>
          <Card.Text className="my-4">
          <p>{striptags(postData.content)}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePost;