import React from "react";
import PostForm from "./PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const PostAddForm = () => {
  const myDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    myDispatch(addPost(post));
    navigate('/');
  };

  return (
   <PostForm action={handleSubmit} actionText="Add post" />
  );
};


export default PostAddForm;