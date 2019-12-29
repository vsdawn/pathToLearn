import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'


function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
