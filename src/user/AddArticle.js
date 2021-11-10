import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { createArticle, getCategories } from "../admin/apiAdmin";
import { Redirect } from "react-router-dom";

const AddArticle = () => {
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
    redirectToArticles: false,
    formData: "",
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
    redirectToArticles,
    formData,
  } = values;

  // Load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createArticle(user._id, token, formData).then((data) => {
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
          loading: false,
          createdArticle: data.name,
          redirectToArticles: true,
        });
      }
    });
  };

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      {/* -------------- Photo Upload ----------------*/}
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-success">
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

      <button className="btn btn-outline-success" onClick={clickSubmit}>
        Create Article
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
      <h2>{`${createArticle} is created`}</h2>
    </div>
  );

  const showLoading = () =>
    loading && <div className="alert alert-success">Loading...</div>;

  const redirectUser = () => {
    if (redirectToArticles) {
      if (!error) {
        return <Redirect to={`/articles/`} />;
      }
    }
  };

  return (
    <Layout
      title="Add a new article"
      description={user.name}
      headerColor="bg-success"
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

export default AddArticle;
