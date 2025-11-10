// src/components/HomePage.js

import React from 'react';
import { posts } from '../posts'; // Import our fake data
import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <p>Welcome to my simple blog. Click on a post title to read more.</p>
      <hr />
      {posts.map(post => (
        <article key={post.id}>
          {/* This Link creates a URL like /post/1, /post/2, etc. */}
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default HomePage;