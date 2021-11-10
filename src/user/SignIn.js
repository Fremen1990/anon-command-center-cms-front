import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth/index";
import "./signIn.css";

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
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      <div className="jumbotron vh-100 custom-gradient d-flex ">
        <div className="container vh-50 align-self-center">
          <div className="row ">
            <div className="col-md-4 offset-4 ">
              {showLoading()}
              {showError()}
              {singInForm()}
              {redirectUser()}
              {/*{JSON.stringify(values)}*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
