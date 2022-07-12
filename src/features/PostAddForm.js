import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const PostAddForm = () => {
  const myDispatch = useDispatch();
  let navigate = useNavigate();
  const [title, setTitle] =  useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    myDispatch(addPost({title, author, publishedDate, shortDescription, content}));
    navigate('/');
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="half-width">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author:</Form.Label>
          <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Published:</Form.Label>
          <Form.Control type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
        </Form.Group>
      </div>

      <Form.Label>Short description:</Form.Label>
      <InputGroup className="shortDescriptionription">
        <Form.Control as="textarea" aria-label="With textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
      </InputGroup>
      <Form.Label>Main Content:</Form.Label>
      <InputGroup className="contentent mb-3">
        <Form.Control as="textarea" aria-label="With textarea" value={content} onChange={e => setContent(e.target.value)}/>
      </InputGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};


export default PostAddForm;