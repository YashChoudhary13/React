import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // React makes it own DOM which is called a virtual DOM, which it compares with main DOM and make changes only on the part where its needed
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


