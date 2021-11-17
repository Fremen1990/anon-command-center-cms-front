import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import Actions from "../core/Actions";
import { Link } from "react-router-dom";
import { getArticles } from "../admin/apiAdmin";
import ArticleItem from "../core/ArticleItem";
import ArticlesList from "../core/ArticlesList";
import Search from "../core/Search";
import ArticleItemDashboard from "../core/ArticleItemDashboard";

const AdminDashboard = () => {
  const [limit, setLimit] = useState(999);

  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(6);
  const [displayedArticles, setdisplayedArticles] = useState([]);

  const loadAllArticles = () => {
    getArticles("createdAt", limit).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAllArticles(data);
        const currentDisplayArticles = data.slice(0, 6);
        setdisplayedArticles(currentDisplayArticles);
      }
    });
  };

  useEffect(() => {
    loadAllArticles();
  }, []);

  return (
    <>
      <Layout title="Dashboard" icon="fas fa-cog" headerColor="bg-success">
        <Actions />

        <section id="articles">
          <div className="container">
            <div className="row">
              <Search />

              {/*<ArticlesList/>*/}
              <div className="col">
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
                        {/*<th>Category</th>*/}
                        <th>Date</th>
                        <th>See details</th>
                        <th>Approve to publish</th>
                        <th>Reject article</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedArticles.map((article, i) => (
                        <ArticleItemDashboard key={i} article={article} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/*Caffels with categories*/}
              <aside className="col-md-3">
                <div className="card text-center bg-success text-white mb-3">
                  <div className="card-body">
                    <h3>Articles</h3>
                    <h4 className="display-4">
                      <i className="fas fa-pencil-alt"></i> {}
                      {allArticles.length}
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
                      <i className="fas fa-folder"></i> 6
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
                      <i className="fas fa-users"></i> 6
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
export default AdminDashboard;
