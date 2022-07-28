import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { getAllPosts, getPostsByCategory } from "../redux/postsRedux";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useParams } from 'react-router-dom';

const PostsByCategories = () => {
  const { category } = useParams();
  const postByCategory = useSelector(state => getPostsByCategory(state, category));
  return (
    <Container className="px-0">
      <div className="d-flex justify-content-between mt-4 mb-2">
        <h2 className="px-2">Category - {category}</h2>
        <Nav.Link as={NavLink} to="/post/add"><Button variant="outline-success">Add post</Button></Nav.Link>
      </div>
      <Row>
        {postByCategory.map(post =>
          <Col lg="4" sm="12" className="my-3" key={post.id}>
            <Post
              id={post.id}
              title={post.title}
              shortDescription={post.shortDescription}
              content={post.mainContent}
              publishedDate={post.publishedDate}
              author={post.author}
              category={post.category}>
            </Post>
          </Col>)}
      </Row>
    </Container>
  );
};


export default PostsByCategories;