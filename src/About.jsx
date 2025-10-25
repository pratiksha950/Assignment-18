import React from 'react';
import './About.css';
import Navbar from './Navbar.jsx';

function About() {
  return (
    <div className="about-container">   
      <h1 className="heading">About</h1>
       <Navbar activeMenu="/About"/>
    </div>
  );
}

export default About;
