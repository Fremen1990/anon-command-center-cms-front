import React, { useState, useEffect } from "react";

import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";

const UserProfile = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
    access: "",
    photo: "",
    password: "",
    error: false,
    success: false,
    editingEnabled: false,
  });

  const { token } = isAuthenticated();

  const {
    name,
    email,
    role,
    bio,
    access,
    password,
    photo,
    error,
    success,
    editingEnabled,
  } = values;

  // const {
  //   user: { _id, name, email, role, access },
  // } = isAuthenticated();

  const init = (userId) => {
    // console.log(userId);
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({
          ...values,
          name: data.name,
          email: data.email,
          role: data.role,
          photo: data.photo,
          bio: data.bio,
          access: data.access,
        });
      }
    });
  };

  useEffect(() => {
    init(props.match.params.userId);
  }, []);

  const handleEditProfileClick = () => {
    setValues({
      ...values,
      editingEnabled: true,
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSaveChangesClick = (e) => {
    e.preventDefault();

    update(props.match.params.userId, token, {
      name,
      email,
      password,
      role,
      bio,
      photo,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            role: data.role,
            bio: data.bio,
            photo: data.photo,
            success: true,
            editingEnabled: false,
          });
        });
      }
    });
  };

  const userProfileStatus = () => (
    <div className="row">
      <div className="col-md-9">
        <div className="card">
          <div className="card header p-3">
            <h4>Your Profile</h4>
            {/*{JSON.stringify(photo)}*/}
          </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Role</label>
                <input
                  type="email"
                  className="form-control"
                  value={role}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Access</label>
                <input
                  type="email"
                  className="form-control"
                  value={access === 1 ? "Admin" : "Registered User"}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>{" "}
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={bio}
                    disabled
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-md-3 d-flex flex-column">
        <h3>Your Avatar</h3>
        <img
          src="/img/avatar.png"
          alt="Avatarrr"
          className="d-block img-fluid mb-3"
        />

        <button
          onClick={handleEditProfileClick}
          className="btn btn-warning btn-block my-2 mx-2"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );

  const profileUpdate = (name, email, password, role, bio) => (
    <div className="row">
      <div className="col-md-9">
        <div className="card">
          <div className="card header p-3">
            <h4>Edit Your Profile</h4>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={handleChange("password")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Role</label>
                <input
                  type="email"
                  className="form-control"
                  value={role}
                  onChange={handleChange("role")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Access</label>
                <input
                  type="email"
                  className="form-control"
                  value={access === 1 ? "Admin" : "Registered User"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>{" "}
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={bio}
                    onChange={handleChange("bio")}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-md-3 d-flex flex-column">
        <h3>Your Avatar</h3>
        <img
          src="/img/avatar.png"
          alt="Avatarrr"
          className="d-block img-fluid mb-3"
        />
        <button
          className="btn btn-success btn-block my-2 mx-2"
          onClick={handleSaveChangesClick}
        >
          Save Changes
        </button>

        <button className="btn btn-warning btn-block my-2 mx-2  row ">
          <label>Change Image</label>
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </button>
        <button className="btn btn-danger btn-block my-2 mx-2" disabled>
          Delete Image
        </button>
      </div>
    </div>
  );

  return (
    <Layout title="UserProfile" headerColor="bg-warning" description={name}>
      <section className="profile my-5">
        <div className="container">
          {editingEnabled ? profileUpdate() : userProfileStatus()}
          {/*{JSON.stringify(editingEnabled)}*/}
        </div>
      </section>
    </Layout>
  );
};

export default UserProfile;
