import React, { useState, useEffect } from "react";
import { getArticles } from "./apiCore";
import ArticleItem from "./ArticleItem";
import ArticleItemDashboard from "./ArticleItemDashboard";

const ArticlesList = () => {
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
              {articlesByArrival.map((article, i) => (
                <ArticleItemDashboard key={i} article={article} />
              ))}

              {JSON.stringify(articlesByArrival.length)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ArticlesList;
