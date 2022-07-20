import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import propTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";


const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author) || '';
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <div className="half-width">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            type="text" value={title}
            onChange={e => setTitle(e.target.value)} />
          {errors.title && <small className="d-block form-text text-danger mt-2">Minimum 3 characters required!</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author:</Form.Label>
          <Form.Control {...register("author", { required: true, minLength: 3 })}
          type="text" value={author} 
          onChange={e => setAuthor(e.target.value)} />
           {errors.author && <small className="d-block form-text text-danger mt-2">Minimum 3 characters required! </small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Published:</Form.Label>
          <Form.Control 
          {...register("date", {required: true, minLength: 10, maxLength: 10})}
          type="date" value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)} />
          {errors.date && <small className="d-block form-text text-danger mt-2">This field is required! </small>}
        </Form.Group>
      </div>

      <Form.Label>Short description:</Form.Label>
      <InputGroup className="shortDescriptionription mb-3">
        <Form.Control {...register("shortDescription", {required: true, minLength: 20})}
        as="textarea" aria-label="With textarea" value={shortDescription}
        onChange={e => setShortDescription(e.target.value)} />
      </InputGroup>
      {errors.shortDescription && <small className="d-block form-text text-danger mb-3">Minimum 20 characters required!</small>}
      <Form.Label>Main Content:</Form.Label>
      <ReactQuill className="mb-3 rounded" theme="snow" value={content} onChange={setContent} />
      {contentError && <small className="d-block form-text text-danger mt-2 mb-3">Content can't be empty</small>}
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