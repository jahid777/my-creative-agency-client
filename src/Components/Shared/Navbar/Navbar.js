import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container-fluid">
         <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand" to="/">
         <img style={{height:'47px',width:'150px'}} src={logo} alt=""/>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">
            <NavLink className="nav-link  nav-text mr-5" to="/home">
              Home 
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link nav-text mr-5" to="/our-portfolio">
              Our Portfolio
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link nav-text mr-5" to="/out-team">
               Our Team
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link nav-text mr-5" to="/contact-us">
              Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
              <button className="main-button">
                  Login
              </button>
          </li>
           
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
