import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./Header.css";
import img from "../../images/logos/Frame.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="main-header-container">
      <Navbar></Navbar>

      <div className="row container">
        <div className="col-md-6 col-sm-12">
          <h1 className="left-content">
            Let’s Grow Your <br />
            Brand To The <br />
            Next Level
          </h1>
          <p className="bottom-text">
            {" "}
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </small>
          </p>
          <Link to="/order">
          <button
            className="main-button"
            style={{ justifyContent: "center", marginLeft: "134px" }}
          >
            Hire Us
          </button>
          </Link>
        </div>

        <div className="col-md-6 col-sm-12">
          <img
            style={{ height: "400px", marginLeft: "10px", marginTop: "20px" }}
            src={img}
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Header;
