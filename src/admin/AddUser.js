import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth/index";

import { isAuthenticated } from "../auth";

const AddUser = () => {
  // const {user: {_id, name, email, role, access}} = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    access: "",
    bio: "",
    error: "",
    success: false,
  });

  const { name, email, password, role, access, bio, success, error } = values;

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
          role: "",
          access: "",
          bio: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const singUpForm = () => (
    <>
      <div className="card-header">
        <h4 className="m-2">Add new user</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                onChange={handleChange("name")}
                type="text"
                className="form-control"
                value={name}
                placeholder="What is your name?"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
                placeholder="...and your email?"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={handleChange("password")}
                type="password"
                className="form-control"
                value={password}
                placeholder="Type password here"
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <input
                onChange={handleChange("role")}
                type="text"
                className="form-control"
                placeholder="What is your role in ANON?"
                value={role}
              />
            </div>

            <div className="form-group">
              <label>Access</label>
              <input
                onChange={handleChange("access")}
                type="number"
                className="form-control"
                placeholder="0-regular, 1-admin"
                value={access}
                max="1"
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Bio</label>
              <input
                onChange={handleChange("bio")}
                type="text"
                className="form-control"
                placeholder="Tell us something about you..."
                value={bio}
              />
            </div>

            <button
              onClick={clickSubmit}
              type="button"
              className="btn btn-warning mt-4 col-12"
            >
              Create User
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
      <Link to="/users"> Check all users</Link>
    </div>
  );

  // const redirectUser = () => {
  //   if (redirectToReferer) {
  //     if (user && user.access === 1) {
  //       return <Redirect to="/admin/dashboard" />;
  //     } else {
  //       return <Redirect to="/" />;
  //     }
  //   }
  //   if (isAuthenticated()) {
  //     return <Redirect to="/" />;
  //   }
  // };

  return (
    <Layout
      title="Add User"
      // description={name}
      headerColor="bg-warning"
      className="container col-md-4 offset-md-4"
    >
      {showSuccess()}
      {showError()}
      {singUpForm()}
    </Layout>
  );
};

export default AddUser;
