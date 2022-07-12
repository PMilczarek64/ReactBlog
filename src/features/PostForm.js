import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import propTypes from 'prop-types';


const PostForm = ({action, actionText, ...props }) => {

  const [title, setTitle] =  useState(props.title || '');
  const [author, setAuthor] = useState(props.author) || '';
  const [publishedDate, setPublishedDate] = useState(props.publishedDate ||'');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content});
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
      {actionText}
    </Button>
  </Form>
  );
};

PostForm.propTypes = {
  action: propTypes.func.isRequired,
  actionText: propTypes.string.isRequired,
};

export default PostForm;