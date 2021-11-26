// import React, { useState, useEffect } from "react";
// import { isAuthenticated } from "../auth";
// import { getArticle, getCategories, updateArticle } from "./apiAdmin";
// import UpdateArticle from "./UpdateArticle";
//
// const clickApprove = (event, { match }) => {
//   const { user, token } = isAuthenticated();
//
//   const [values, setValues] = useState({
//     name: "",
//     author: "",
//     approved: "",
//     loading: false,
//     error: "",
//   });
//
//   const { name, author, articleDate, approved, loading, error } = values;
//
//   event.preventDefault();
//   setValues({ ...values, error: "", loading: true, approved: 1 });
//   updateArticle(match.params.articleId, user._id, token, formData).then(
//     (data) => {
//       if (data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({
//           ...values,
//           approved: 0,
//           redirectToArticle: true,
//         });
//       }
//     }
//   );
// };
//
// export default Approve;
