// src/components/PostPage.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../posts';

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div>
        <h2>Post not found!</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    // Add className for styling
    <div className="post-page"> 
      <Link to="/" className="back-link">
        {'<'} Back to Home
      </Link>
      <hr />
      <h1>{post.title}</h1>
      {/* Add className to the <p> tag */}
      <p className="post-content">{post.content}</p> 
    </div>
  );
};

export default PostPage;