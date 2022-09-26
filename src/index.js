import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtKVVxkCO6v_KeTpZaTtGOKfqqyJRDGVk",
  authDomain: "coder-react-22ad1.firebaseapp.com",
  projectId: "coder-react-22ad1",
  storageBucket: "coder-react-22ad1.appspot.com",
  messagingSenderId: "697724467324",
  appId: "1:697724467324:web:761bb09c9e38025702f1f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
