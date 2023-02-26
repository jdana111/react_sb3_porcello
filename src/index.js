import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [ , , third] = ["AAA", "BBB", "CCC"]
console.log("third = ", third)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Joe"/>
  </React.StrictMode>
);

