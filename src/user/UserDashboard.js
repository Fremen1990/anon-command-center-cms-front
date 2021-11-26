import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import Actions from "../core/Actions";
import { Link } from "react-router-dom";
import { getArticles } from "../core/apiCore";
import ArticleItem from "../core/ArticleItem";
import ArticlesList from "../core/ArticlesList";
import Search from "../core/Search";
import { isAuthenticated } from "../auth";

const UserDashboard = () => {
  const user = isAuthenticated();

  const [articlesByArrival, setArticlesByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadArticlesByArrival = () => {
    getArticles("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setArticlesByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadArticlesByArrival();
  }, []);

  return (
    <>
      <Layout title="Dashboard" icon="fas fa-cog" headerColor="bg-success">
        <Actions />

        <section id="articles">
          <div className="container">
            <div className="row">
              <Search />

              {/*Articles Table USER DASHBOARD*/}

              <div className="col-md-9">
                <div className="card">
                  <div className="card header">
                    <h4>Latest Articles</h4>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead className="bg-secondary text-light">
                      <tr>
                        <th>Status</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Article date</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articlesByArrival.map((article, i) => (
                        <ArticleItem key={i} article={article} user={user} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/*// <!-- RIGHT SIDE OF DASHBOARD -->*/}
              <aside className="col-md-3">
                <div className="card text-center bg-success text-white mb-3">
                  <div className="card-body">
                    <h3>Articles</h3>
                    <h4 className="display-4">
                      <i className="fas fa-pencil-alt"></i>{" "}
                      {articlesByArrival.length}
                    </h4>

                    <Link
                      to="/articles"
                      className="btn btn-outline-light btn-sm"
                    >
                      View
                    </Link>
                  </div>
                </div>

                <div className="card text-center bg-primary text-white mb-3">
                  <div className="card-body">
                    <h3>Projects</h3>
                    <h4 className="display-4">
                      <i className="fas fa-folder"></i> 3
                    </h4>
                    <Link
                      to="/projects"
                      className="btn btn-outline-light btn-sm"
                    >
                      View
                    </Link>
                  </div>
                </div>

                <div className="card text-center bg-warning text-white mb-3">
                  <div className="card-body">
                    <h3>Users</h3>
                    <h4 className="display-4">
                      <i className="fas fa-users"></i> 99
                    </h4>
                    <Link to="/users" className="btn btn-outline-light btn-sm">
                      View
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default UserDashboard;
