// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import './App.css'; // You can add basic styles here

function App() {
  return (
    // 1. Set up the router
    <BrowserRouter>
      <div className="App">
        {/* 2. Define all possible routes */}
        <Routes>
          {/* Route 1: The Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route 2: The Individual Post Page */}
          {/* ':id' is a dynamic parameter that will be passed to PostPage */}
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;