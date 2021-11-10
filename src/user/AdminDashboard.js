import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import Actions from "../core/Actions";
import { Link } from "react-router-dom";
import { getArticles } from "../core/apiCore";
import ArticleItem from "../core/ArticleItem";
import ArticlesList from "../core/ArticlesList";
import Search from "../core/Search";

const AdminDashboard = () => {
  return (
    <>
      <Layout title="Dashboard" icon="fas fa-cog" headerColor="bg-success">
        <Actions />

        <section id="articles">
          <div className="container">
            <div className="row">
              <Search />

              <ArticlesList />

              {/*Caffels with categories*/}
              <aside className="col-md-3">
                <div className="card text-center bg-success text-white mb-3">
                  <div className="card-body">
                    <h3>Articles</h3>
                    <h4 className="display-4">
                      <i className="fas fa-pencil-alt"></i> 6
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
