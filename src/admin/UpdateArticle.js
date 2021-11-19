import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import { getArticle, getCategories, updateArticle } from "./apiAdmin";

const UpdateArticle = ({ match }) => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    categories: [],
    category: "",
    author: "",
    articleDate: "",
    photo: "",
    loading: false,
    error: "",
    createdArticle: "",
    redirectToProfile: false,
    formData: "",
    redirectToArticle: false,
  });

  const {
    name,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
    paragraph7,
    paragraph8,
    paragraph9,
    paragraph10,
    categories,
    category,
    author,
    articleDate,
    photo,
    loading,
    error,
    createdArticle,
    redirectToProfile,
    formData,
    redirectToArticle,
  } = values;

  const init = (articleId) => {
    getArticle(articleId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // populate the state
        setValues({
          ...values,
          name: data.name,
          paragraph1: data.paragraph1,
          paragraph2: data.paragraph2,
          paragraph3: data.paragraph3,
          paragraph4: data.paragraph4,
          paragraph5: data.paragraph5,
          paragraph6: data.paragraph6,
          paragraph7: data.paragraph7,
          paragraph8: data.paragraph8,
          paragraph9: data.paragraph9,
          paragraph10: data.paragraph10,
          author: data.author,
          articleDate: data.articleDate,
          photo: data.photo,
          approved: data.approved,
          loading: false,
          createdArticle: data.name,
          formData: new FormData(),
        });
        //load categories
        initCategories();
      }
    });
  };

  // Load categories and set form data
  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    init(match.params.articleId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updateArticle(match.params.articleId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            paragraph1: "",
            paragraph2: "",
            paragraph3: "",
            paragraph4: "",
            paragraph5: "",
            paragraph6: "",
            paragraph7: "",
            paragraph8: "",
            paragraph9: "",
            paragraph10: "",
            author: "",
            articleDate: "",
            photo: "",
            approved: 0,
            loading: false,
            createdArticle: data.name,
            redirectToArticle: true,


          });
        }
      }
    );
  };

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      {/* -------------- Photo Upload ----------------*/}
      <h4>Change Photo</h4>
      <div className="form-group">
        <label className="btn btn-warning">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </label>
      </div>

      {/* -------------- Article Name ----------------*/}
      <div className="form-group">
        <label className="text-muted">Article Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      {/* -------------- Author Name ----------------*/}
      <div className="form-group">
        <label className="text-muted">Author</label>
        <input
          onChange={handleChange("author")}
          type="text"
          className="form-control"
          value={author}
        />
      </div>

      {/* -------------- Article Date ----------------*/}
      <div className="form-group">
        <label className="text-muted">Article Date</label>
        <input
          onChange={handleChange("articleDate")}
          type="date"
          className="form-control"
          value={articleDate}
        />
      </div>

      {/* -------------- Article Category ----------------*/}
      <div className="form-group">
        <label className="text-muted">Category</label>
        <select onChange={handleChange("category")} className="form-control">
          <option>Please select</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {/* -------------- Paragraphs from 1 to 10  ----------------*/}
      <div className="form-group">
        <label className="text-muted">Paragraph1</label>
        <textarea
          onChange={handleChange("paragraph1")}
          className="form-control"
          value={paragraph1}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph2</label>
        <textarea
          onChange={handleChange("paragraph2")}
          className="form-control"
          value={paragraph2}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph3</label>
        <textarea
          onChange={handleChange("paragraph3")}
          className="form-control"
          value={paragraph3}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph4</label>
        <textarea
          onChange={handleChange("paragraph4")}
          className="form-control"
          value={paragraph4}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph5</label>
        <textarea
          onChange={handleChange("paragraph5")}
          className="form-control"
          value={paragraph5}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph6</label>
        <textarea
          onChange={handleChange("paragraph6")}
          className="form-control"
          value={paragraph6}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph7</label>
        <textarea
          onChange={handleChange("paragraph7")}
          className="form-control"
          value={paragraph7}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph8</label>
        <textarea
          onChange={handleChange("paragraph8")}
          className="form-control"
          value={paragraph8}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph9</label>
        <textarea
          onChange={handleChange("paragraph9")}
          className="form-control"
          value={paragraph9}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Paragraph10</label>
        <textarea
          onChange={handleChange("paragraph10")}
          className="form-control"
          value={paragraph10}
        />
      </div>

      {/*<button className="btn-success" onClick={addParagrapth}>Add Paragraph</button>*/}

      <button className="btn btn-outline-warning" onClick={clickSubmit}>
        Update Article
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert.alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert.alert-info"
      style={{ display: createdArticle ? "" : "none" }}
    >
      <h2>{`${createdArticle} is updated!`}</h2>
    </div>
  );

  const showLoading = () =>
    loading && <div className="alert alert-success">Loading...</div>;

  const redirectUser = () => {
    if (redirectToArticle) {
      if (!error) {
        return <Redirect to={`/article/${match.params.articleId}`} />;
      }
    }
  };

  return (
    <Layout
      title="Update article"
      description="Article desc"
      headerColor="bg-warning"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
          {redirectUser()}
        </div>
      </div>
    </Layout>
  );
};

export default UpdateArticle;
