import { API } from "../config";

export const createCategory = (userId, token, name) => {
  // console.log(name, email, password)
  // console.log("User ID", userId);
  // console.log("token ", token);
  // console.log("Project Name", name);
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(name),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProject = (userId, token, name) => {
  // console.log(name, email, password)
  console.log("User ID", userId);
  console.log("token ", token);
  console.log("Project Name", name);
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(name),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createArticle = (userId, token, article) => {
  // console.log(name, email, password)
  // console.log("User ID",userId)
  // console.log("token ",token)
  // console.log("Project Name",article)
  return fetch(`${API}/article/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: article,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// to perform CRUD on article
// 1 get all articles
// 2 get a single article
// 3 update single article
// 4 delete single article

export const getArticles = (sortBy, limit = 6) => {
  return fetch(`${API}/articles?sort_by=${sortBy}&order=desc&limit=${limit}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteArticle = (articleId, userId, token) => {
  return fetch(`${API}/article/${articleId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getArticle = (articleId) => {
  return fetch(`${API}/article/${articleId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateArticle = (articleId, userId, token, article) => {
  return fetch(`${API}/article/${articleId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: article,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (user_idToDelete, userId, token) => {
  return fetch(`${API}/user/${user_idToDelete}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
