import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read } from "./apiCore";
import ShowImage from "./ShowImage";
import moment from "moment";

const Article = (props) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);

  const loadSingleArticle = (articleId) => {
    read(articleId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setArticle(data);
      }
    });
  };

  useEffect(() => {
    const articleId = props.match.params.articleId;

    loadSingleArticle(articleId);
  }, []);

  return (
    <Layout
      title={article.name}
      icon="far fa-file-alt"
      headerColor="bg-success"
    >
      <div className="container">
        <div className="card my-3">
          <ShowImage item={article} url="article" classname="card-image-top" />
          <div className="card-body">
            <h5 className="card-title d-flex">
              <ul className="list-group">
                <li className="list-group-item">
                  Article title: {article.name}
                </li>
                <li className="list-group-item">{article.category}</li>
                <li className="list-group-item">
                  {article.approved ? "✔ Approved" : "🙄 Pending"}
                </li>
                <li className="list-group-item">Author: {article.author}</li>
                <li className="list-group-item">Date: {article.articleDate}</li>
              </ul>
            </h5>
            <p className="card-text">
              <h5>Paragraph 1:</h5>
              <p>{article.paragraph1}</p>
            </p>

            {article.paragraph2 ? (
              <p className="card-text">
                <h5>Paragraph 2:</h5>
                <p>{article.paragraph2}</p>
              </p>
            ) : null}

            {article.paragraph3 ? (
              <p className="card-text">
                <h5>Paragraph 3:</h5>
                <p>{article.paragraph3}</p>
              </p>
            ) : null}

            {article.paragraph4 ? (
              <p className="card-text">
                <h5>Paragraph 4:</h5>
                <p>{article.paragraph4}</p>
              </p>
            ) : null}

            {article.paragraph5 ? (
              <p className="card-text">
                <h5>Paragraph 5:</h5>
                <p>{article.paragraph5}</p>
              </p>
            ) : null}

            {article.paragraph6 ? (
              <p className="card-text">
                <h5>Paragraph 6:</h5>
                <p>{article.paragraph6}</p>
              </p>
            ) : null}

            {article.paragraph7 ? (
              <p className="card-text">
                <h5>Paragraph 7:</h5>
                <p>{article.paragraph7}</p>
              </p>
            ) : null}

            {article.paragraph8 ? (
              <p className="card-text">
                <h5>Paragraph 8:</h5>
                <p>{article.paragraph8}</p>
              </p>
            ) : null}

            <small className="text-muted">
              Last updated {moment(article.createdAt).format("LLLL")}
            </small>
          </div>
        </div>

        {/*<div className="row">{JSON.stringify(article)}</div>*/}
      </div>
    </Layout>
  );
};

export default Article;
