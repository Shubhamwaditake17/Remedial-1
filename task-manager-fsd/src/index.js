import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <-- IMPORT THIS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- ADD THIS WRAPPER */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);