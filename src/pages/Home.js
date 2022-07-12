import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { getAllPosts } from "../redux/postsRedux";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Container className="px-0">
      <div className="d-flex justify-content-between mt-4 mb-2">
      <h2 className="px-2">All posts</h2>
      <Nav.Link as={NavLink} to="/post/add"><Button variant="outline-success">Add post</Button></Nav.Link>
      </div>
      <Row>
        {posts.map(post =>
          <Col lg="4" sm="12" className="my-3" key={post.id}>
            <Post
              id={post.id}
              title={post.title}
              shortDescription={post.shortDescription}
              content={post.mainContent}
              publishedDate={post.publishedDate}
              author={post.author}>
            </Post>
          </Col>)}
      </Row>
    </Container>
  );
};


export default Home;