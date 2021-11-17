import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated, signout } from "../auth/index";
import "./signIn.css";
import devThomasLogo from "../assets/TS.png";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferer: false,
  });

  const { email, password, loading, redirectToReferer, error } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferer: true,
          });
        });
      }
    });
  };

  const singInForm = () => (
    <>
      <div className="card-header bg-light bg-gradient">
        <h4 className="m-2">User sign in</h4>
        <div className="card-body">
          <form type="submit">
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={handleChange("password")}
                type="password"
                className="form-control"
                value={password}
              />
            </div>

            <button
              id="btn-sign-in"
              onClick={clickSubmit}
              type="submit"
              className="btn btn-success mt-4 col-12 custom-gradient"
            >
              Sing In
            </button>
          </form>
        </div>
      </div>
    </>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferer) {
      if (user && user.access === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user && user.access === 0) {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/signin" />;
    }
  };

  return (
    <>
      <div className="jumbotron d-flex row m-0">
        <nav
          id="login_header"
          className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient p0 d-flex justify-content-center"
        >
          <Link className="navbar-brand" to="#">
            ANON Articles Command Center
          </Link>
          <a target={"_blank"} href={"https://www.devthomas.pl/"}>
            <button className="btn btn-secondary badge">
              by DevThomas
              <img
                className="mx-1"
                src={devThomasLogo}
                alt="devthomas"
                style={{ maxHeight: "25%", maxWidth: "25%" }}
              />{" "}
            </button>
          </a>
        </nav>

        <div className="custom-gradient d-flex p-0">
          <div className="container  align-self-center">
            <div className="row ">
              <div className="col-md-6 offset-3 ">
                {showLoading()}
                {showError()}
                {singInForm()}
                {redirectUser()}
                {/*{JSON.stringify(values)}*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
