import React, { useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import devThomasLogo from "../assets/TS.png";

const Menu = ({ history }) => {
  const user = isAuthenticated().user;

  return (
    <>
      {/*<!-------------- NAVBAR ------------------>*/}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient p0">
        <div className="container">
          <Link
            className="navbar-brand"
            to={user.access === 1 ? "/admin/dashboard" : "/user/dashboard"}
          >
            ANON Articles Command Center
            <span className="badge bg-secondary p-1">
              by DevThomas
              <img
                className="mx-1"
                src={devThomasLogo}
                alt="devthomas"
                style={{ maxHeight: "20%", maxWidth: "20%" }}
              />{" "}
            </span>
          </Link>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            // data-target=#navbarCollapse
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse vanbar-collapse" id="navbarCollapse"></div>
          <ul className="navbar-nav">
            {user.access === 1 ? (
              <li className="nav-item px-2 bg-warning">
                <Link className="nav-link text-dark" to="/admin/dashboard">
                  Admin Dashboard
                </Link>
              </li>
            ) : (
              <li className="nav-item px-2">
                <Link className="nav-link" to="/user/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

            <li className="nav-item px-2">
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
          </ul>

          {/*// <!-- dropdown list -->*/}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown mr-3">
              <div
                type="button"
                id="journalist-dropdown-menu"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>Welcome Journalist
              </div>
              >
              <ul
                className="dropdown-menu"
                aria-labelledby="journalist-dropdown-menu"
              >
                <li class="dropdown-item">
                  <Link className="dropdown-item" to={`/profile/${user._id}`}>
                    {" "}
                    <i className="fas fa-user-circle p-2"></i>User Profile
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="dropdown-item" to="/user/userarticles">
                    {" "}
                    <i className="fas fa-user-circle p-2"></i>User Articles
                  </Link>
                </li>
              </ul>
            </li>

            {!isAuthenticated() && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    <i className="fas fa-user"></i> Signin
                  </Link>
                </li>
              </>
            )}

            {isAuthenticated() && (
              <>
                <li
                  className="nav-item"
                  style={{ cursor: "pointer", color: "$ffffff" }}
                >
                  {/*<Link className="nav-link" to="/signout">*/}
                  <span
                    className="nav-link"
                    onClick={() =>
                      signout(() => {
                        history.push("/signin");
                      })
                    }
                  >
                    <i className="fas fa-user-times"></i> Sign out
                  </span>
                  {/*</Link>*/}
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Menu);
