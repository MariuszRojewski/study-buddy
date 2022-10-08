import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'views/App';

console.log('Hello World');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
