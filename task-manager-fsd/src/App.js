import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar will show on every page */}
      <Navbar />
      
      {/* Routes will decide which component to show based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;