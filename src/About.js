import React from "react";
import Emoji from 'react-emoji-render';
import { NavLink } from 'react-router-dom';

function About(props) {
  return (
      <div>
      <div className="navigation white links">
        <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
        <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
      </div>
    <div className="about-page container-fluid">
    <div className="page-width">
    <div className="row">

    <div className="about-text">
        <div>
            <div className="first">
        <h5>Hi, I'm Christine!</h5>
        <br/>
          <p>I'm currently on leave from Brown University,
          designing the virtual campus tour experience @
          <a href="https://www.adoraexperiences.com/index.html" target="_blank"
          rel="noopener noreferrer"> Adora Experiences</a>.</p>
          <br/>
          <p>Resume: <a target="_blank" rel="noopener noreferrer"
          href="https://read.cv/christinelin">
          read.cv/christinelin</a></p>
          <p>Email: chin_hsuen_lin@brown.edu</p>

          </div>
         </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About;
