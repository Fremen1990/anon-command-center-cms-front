import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import { isAuthenticated } from "../auth";

const ArticleItemDashboard = ({ article, destroy }) => {
  // const [category, setCategory] = useState([]);
  // const [error, setError] = useState(false);

  // const init = () => {
  //   getCategory(article.category._id).then((data) => {
  //     if (data.error) {
  //       setError(data.error);
  //     } else {
  //       setCategory(data);
  //     }
  //   });
  // };
  //
  // useEffect(() => {
  //   init();
  // }, []);

  const user = isAuthenticated();

  return (
    <>
      <tr>
        <td>{article.approved ? "✔ Approved" : "🙄 Pending"}</td>
        <td style={{ height: "10vh", width: "10vw" }}>
          {" "}
          <ShowImage item={article} url="article" />
        </td>
        <td>{article.name}</td>
        <td>{article.author}</td>
        {/*<td> {}</td>*/}
        <td>{article.articleDate}</td>
        <td>
          <Link to={`/article/${article._id}`} className="btn btn-info">
            <i className="fas fa-search"></i> Details
          </Link>
        </td>

        <td className={`${user.user.access === 1 ? "d-table-cell" : "d-none"}`}>
          <button className="btn btn-success">
            <i className="fa fa-check" aria-hidden="true"></i>
            Approve
          </button>
        </td>
        <td className={`${user.user.access === 1 ? "d-table-cell" : "d-none"}`}>
          <button className="btn btn-danger h-100">
            <i className="fa fa-times d-block" aria-hidden="true"></i>
            Reject
          </button>
        </td>
      </tr>
    </>
  );
};
export default ArticleItemDashboard;
