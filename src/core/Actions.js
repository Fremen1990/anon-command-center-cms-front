import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

const Actions = () => (
  <>
    <section id="actions" className="py-4 md-4 bg-light">
      <div className="container">
        <div className="row">
          {/*// <!-- Add Article -->*/}
          <div className="col-md-3">
            <Link
              to="/admin/AddArticle"
              className="btn btn-success  d-block"
              // data-bs-toggle="modal"
              // data-bs-target="#addArticleModal"
            >
              <i className="fas fa-plus px-2"></i>Add Article
            </Link>
          </div>

          {isAuthenticated() && isAuthenticated().user.access === 1 && (
            <>
              {/*// <!-- Add project -->*/}

              <div className="col-md-3">
                <Link
                  to="/create/project"
                  className="btn btn-primary  d-block"
                  // data-bs-toggle="modal"
                  // data-bs-target="#addArticleModal"
                >
                  <i className="fas fa-plus px-2"></i>Add Project
                </Link>
              </div>

              {/*// <!-- Add user -->*/}

              <div className="col-md-3">
                <Link
                  to="/create/user"
                  className="btn btn-warning  d-block"
                  // data-bs-toggle="modal"
                  // data-bs-target="#addArticleModal"
                >
                  <i className="fas fa-plus px-2"></i>Add User
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  </>
);

export default Actions;
