import React from 'react';
import getlearn from '../Image/getlearn.svg';
import '../Header/Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Course from '../Course/Course';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mainNav">
          {/* <Link className="navbar-brand" to="/"><img clss="headerLogo" src={getlearn} alt="logo" /></Link> */}
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
          {/* <div className="collapse navbar-collapse topHeader" id="navbarNavAltMarkup"> */}
          <div className="navbar-nav footer">
            <Link className="nav-item nav-link headerItems" to="/">Terms of Privacy</Link>
            <Link className="nav-item nav-link" to="/course">Blog</Link>
          </div>
          {/* </div> */}
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
