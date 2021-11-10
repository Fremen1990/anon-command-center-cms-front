import React from "react";

import Layout from "../core/Layout";
import { isAuthenticated } from "../auth/index";

const UserArticles = () => {
  const user = isAuthenticated();

  return (
    <Layout
      title="UserProfile"
      description={user.name}
      headerColor="bg-warning"
    >
      <section id="articles">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card header">
                  <h4>Latest Articles</h4>
                </div>
                <table className="table table-striped table-hover">
                  <thead className="bg-secondary text-light">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Post One</td>
                      <td>Science</td>
                      <td>3rd July 2021</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Post Two</td>
                      <td>Criminal</td>
                      <td>3rd July 2021</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Post Three</td>
                      <td>Society</td>
                      <td>3rd July 2021</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Post Four</td>
                      <td>Science</td>
                      <td>3rd July 2021</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Post Fifth</td>
                      <td>Criminal</td>
                      <td>3rd July 2021</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>Post Sixth</td>
                      <td>Society</td>
                      <td>3rd July 2021</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <nav className="ml-4">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a href="#" className="page-link">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active ">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item ">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item ">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item ">
                      <a href="#" className="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserArticles;
