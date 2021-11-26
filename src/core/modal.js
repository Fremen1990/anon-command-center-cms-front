import { Link } from "react-router-dom";
import React from "react";

//   Are you sure that you want to smash this article entirely? 🙄
//         Yes, DELETE it!
//                NO! No way!
const confirmDeleteModal = (
  text,
  button_1_text,
  button_1_method,
  button_2_text,
  button_2_method
) => {
  return (
    <>
      {/*<button*/}
      {/*  type="button"*/}
      {/*  className="btn btn-primary"*/}
      {/*  data-bs-toggle="modal"*/}
      {/*  data-bs-target="#exampleModal"*/}
      {/*>*/}
      {/*  Launch demo modal*/}
      {/*</button>*/}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {" "}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-dark">{text}</div>
            <div class="modal-footer">
              <Link to={"/admin/AddArticle"}></Link>
              {/*<Link to={`/article/${match.params.articleId}`}>*/}
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={button_1_method}
              >
                {button_1_text}
              </button>
              {/*</Link>*/}
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                {button_2_text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // if (redirectToArticle) {
  //   if (!error) {
  //     return <Redirect to={`/articles`} />;
  //   }
  // }
};

export default confirmDeleteModal;
