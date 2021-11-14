import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import "./signIn.css";
import devThomasLogo from "../assets/TS.png";

const SignOut = () => (
  <div className="jumbotron d-flex row m-0">
    <nav
      id="login_header"
      className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient p0 d-flex justify-content-center"
    >
      <Link className="navbar-brand" to="#">
        ANON Articles Command Center
        <a target={"_blank"} href={"https://www.devthomas.pl/"}>
          <span className="badge bg-secondary p-1 mx-3">
            by DevThomas
            <img
              className="mx-1"
              src={devThomasLogo}
              alt="devthomas"
              style={{ maxHeight: "20%", maxWidth: "20%" }}
            />{" "}
          </span>
        </a>
      </Link>
    </nav>

    <div className="custom-gradient d-flex align-items-center justify-content-center">
      <div className="row d-flex justify-content-center">
        {/*<div className="row ">*/}
        {/*<div className="col-md-6 offset-3 ">*/}
        <h2 className="text-light mx-0 signout">Work Done! Signed Out 😉</h2>
        <button className="btn btn-success my-5">
          <Link className="nav-link text-light h3" to="/signin">
            <i className="fas fa-user"></i> Sign-in again!
          </Link>
        </button>
        {/*</div>*/}
      </div>
    </div>
    {/*</div>*/}
  </div>
);

export default SignOut;
