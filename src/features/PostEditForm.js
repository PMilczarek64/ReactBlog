import React from "react";
import PostForm from "./PostForm";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPostById } from "../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';


const PostEditForm = () => {
  const { postId } = useParams();
  const postData = useSelector(state => getPostById(state, postId));
  const myDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    myDispatch(editPost({ ...post, id: postId }));
    navigate('/');
  };
  if (!postData) return <Navigate to="/" />
  else
    return (
      <PostForm
        action={handleSubmit}
        actionText="Update"
        postId={postId}
        title={postData.title}
        author={postData.author}
        publishedDate={postData.publishedDate}
        shortDescription={postData.shortDescription}
        content={postData.content}>
      </PostForm>
    );
};

export default PostEditForm;