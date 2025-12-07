import React from 'react';
import ReactDOM from 'react-dom/client'; // Must import '/client' for modern React
import App from './App';
import './style.css'; // Your global CSS import

// Find the root element
const rootElement = document.getElementById('root'); 

// Create the root container using the modern React 18 API
const root = ReactDOM.createRoot(rootElement); 

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);