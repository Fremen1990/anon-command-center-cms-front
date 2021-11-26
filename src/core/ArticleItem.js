import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import { isAuthenticated } from "../auth";
import { deleteArticle, updateArticle } from "../admin/apiAdmin";
import confirmDeleteModal from "./modal";

const ArticleItem = ({ article, destroy, dashboardView }) => {
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

  const [articleStatus, setArticleStatus] = useState(article.approved);

  const user = isAuthenticated();
  const { token } = isAuthenticated();

  //////// APPROVAL WORKFLOW

  const [values, setValues] = useState({
    name: "",
    author: "",
    approved: article.approved,
    formData: new FormData(),
    loading: false,
    error: "",
    actionDone: false,
  });

  const { name, author, articleDate, approved, formData, loading, error } =
    values;

  const clickApprove = () => {
    console.log("clicked approve");
    // event.preventDefault();
    formData.set("approved", 1);
    setValues({ ...values, error: "", loading: true, approved: 1 });
    updateArticle(article._id, user.user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          approved: 1,
          formData: new FormData(),
          redirectToArticle: true,
          actionDone: true,
        });
      }
      setArticleStatus(1);
    });
    // window.location.reload(false);
  };

  const clickReject = () => {
    console.log("clicked reject");
    // event.preventDefault();
    formData.set("approved", -1);
    setValues({ ...values, error: "", loading: true, approved: -1 });
    updateArticle(article._id, user.user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          approved: -1,
          formData: new FormData(),
          redirectToArticle: true,
          actionDone: true,
        });
      }
      setArticleStatus(-1);
    });
    // window.location.reload(false);
  };

  const renderStatus = () => {
    switch (approved) {
      case 0:
        return "🙄 Pending";
        break;
      case 1:
        return "✔ Approved";
        break;
      case -1:
        return "🥵 Rejected";
      default:
        console.log("Some problem with workflow status notation");
    }
  };

  return (
    <>
      <tr>
        {/*{JSON.stringify(token)}*/}
        <td>
          {/*{article.approved ? "✔ Approved" : "🙄 Pending"}*/}
          {renderStatus()}
        </td>

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
        {/*{JSON.stringify(dashboardView)}*/}
        <td
          className={`${user.user.access === 1 ? "d-table-cell" : "d-none"} ${
            dashboardView ? "d-none" : "d-table-cell"
          }`}
        >
          <Link
            to={`/admin/article/update/${article._id}`}
            className="btn btn-warning "
          >
            <i className="fas fa-edit"></i>
            <span className="bg-warning badge h-100 d-block">Update</span>
          </Link>
        </td>

        <td
          className={`${user.user.access === 1 ? "d-table-cell" : "d-none"} ${
            dashboardView ? "d-none" : "d-table-cell"
          }`}
        >
          <button
            className="btn btn-danger"
            // onClick={() => destroy(article._id)}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {confirmDeleteModal(
              "Are you sure that you want to smash this article entirely? 🙄",
              " Yes, DELETE it!",
              () => destroy(article._id),
              "       NO! No way!"
            )}
            <i className="fa fa-trash" aria-hidden="true"></i> Delete
          </button>
        </td>

        <td className={`${user.user.access === 1 ? "d-table-cell" : "d-none"}`}>
          <button className="btn btn-success" onClick={() => clickApprove()}>
            <i className="fa fa-check" aria-hidden="true"></i>
            Approve
          </button>
        </td>
        <td className={`${user.user.access === 1 ? "d-table-cell" : "d-none"}`}>
          <button className="btn btn-danger" onClick={() => clickReject()}>
            <i className="fa fa-times" aria-hidden="true"></i>
            Reject
          </button>
        </td>
      </tr>
    </>
  );
};
export default ArticleItem;
