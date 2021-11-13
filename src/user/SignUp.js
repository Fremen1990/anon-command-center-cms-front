import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Layout from "../core/Layout";
import { signup } from "../auth/index";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const singUpForm = () => (
    <>
      <div className="card-header">
        <h4 className="m-2">User sign up</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                onChange={handleChange("name")}
                type="text"
                className="form-control"
                value={name}
              />
            </div>
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
              onClick={clickSubmit}
              type="button"
              className="btn btn-success mt-4 col-12"
            >
              Sing Up
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

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account has been created.
      <Link to="/signin">Sign in</Link>
    </div>
  );

  return (
    <>
      {/*  title="Sing-Up"*/}
      {/*  icon="fas fa-cog"*/}
      {/*  className="container col-md-4 offset-md-4"*/}
      {/*>*/}
      {showSuccess()}
      {showError()}
      {singUpForm()}
      {/*{JSON.stringify(values)}*/}
      // {/*</Layout>*/}
    </>
  );
};

export default SignUp;
