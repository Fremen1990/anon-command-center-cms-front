import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Layout from "./Layout";
import ArticleItem from "./ArticleItem";
import { getCategories, getFilteredArticles } from "./apiCore";
import Checkbox from "./Checkbox";
import Search from "./Search";
import { getArticles, deleteArticle } from "../admin/apiAdmin";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const Articles = () => {
  const [myFilters, setMyFilters] = useState({
    filters: {
      category: [],
      approved: [],
    },
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(25);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState(0);
  // const [articles, setArticles] = useState([]);

  const { user, token } = isAuthenticated();

  // const loadArticles = () => {
  //   getArticles().then((data) => {
  //     if (data.error) {
  //       setError(data.error);
  //     } else {
  //       setArticles(data);
  //     }
  //   });
  // };

  const [articlesByArrival, setArticlesByArrival] = useState([]);

  const loadArticlesByArrival = () => {
    getArticles("createdAt", limit).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setArticlesByArrival(data);
      }
    });
  };

  const destroy = (articleId) => {
    // ask about confirmation
    deleteArticle(articleId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        // loadArticles();
        loadArticlesByArrival();
      }
    });
  };

  // const [approved, setApproved] = useState([]);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });

    // loadArticles();

    // getApproved().then(data => {
    //     if (data.error) {
    //         setError(data.error)
    //     } else {
    //         setApproved(data)
    //         console.log(data)
    //     }
    // })
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters)
    getFilteredArticles(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    getFilteredArticles(skip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  // const loadMoreButton = () => {
  //   return (
  //     size >= 0 &&
  //     size >= limit && (
  //       <button onClick={loadMore} className="btn btn-warning mb-5">
  //         Load more
  //       </button>
  //     )
  //   );
  // };

  const handleFilter = (filters, filterBy) => {
    // console.log('from Articles component: ',filters, filterBy)
    console.log(filters == "");
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  useEffect(() => {
    init();
    loadArticlesByArrival();

    // loadArticles();

    loadFilteredResults(skip, limit, myFilters.filters);
  }, [""]);

  return (
    <>
      <Layout title="Articles" icon="fas fa-cog" headerColor="bg-success">
        <div className="container">
          <div className="row">
            <Search />
            <div className="d-flex">
              {/*<ArticlesList/>*/}
              <div className="card col-10">
                <div className="card header"></div>
                <table className="table table-striped table-hover">
                  <thead className="bg-secondary text-light">
                    <tr>
                      {user.access === 1 ? (
                        <>
                          <th>Status</th>
                          <th>Photo</th>
                          <th>Title</th>
                          <th>Author</th>
                          {/*<th>Category</th>*/}
                          <th>Date</th>
                          <th>See details</th>
                          <th>Update</th>
                          <th>Delete</th>
                          <th>Approve to publish</th>
                          <th>Reject article</th>
                        </>
                      ) : (
                        <>
                          <th>Status</th>
                          <th>Photo</th>
                          <th>Title</th>
                          <th>Author</th>
                          {/*<th>Category</th>*/}
                          <th>Date</th>
                          <th>See details</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {/*{*/}
                    {/*  myFilters.filters.category != ""*/}
                    {/*    ? filteredResults.map((article, i) => (*/}
                    {/*        <ArticleItem key={i} article={article} />*/}
                    {/*      ))*/}
                    {/*    : articles.map((article, i) => (*/}
                    {/*        <ArticleItem key={i} article={article} />*/}
                    {/*      ))*/}

                    {/*  // articlesByArrival.map((article, i) => (*/}
                    {/*  //   <ArticleItem key={i} article={article} />*/}
                    {/*  // ))*/}
                    {/*}*/}

                    {articlesByArrival.map((article, i) => (
                      <ArticleItem
                        key={i}
                        article={article}
                        destroy={destroy}
                        user={user}
                      />
                    ))}
                  </tbody>
                </table>
                {/*{loadMoreButton()}*/}
                {/*{JSON.stringify(myFilters.filters)}*/}
              </div>

              {/*FIlters*/}
              <div className="col-2 d-flex mx-4">
                <ul className="d-flex flex-column p-0">
                  <div className="card text-center bg-success text-white mb-3">
                    <div className="card-body">
                      <h3>Articles</h3>
                      <h4 className="display-4">
                        <i className="fas fa-pencil-alt"></i>{" "}
                        <CountUp
                          delay={5}
                          start={0}
                          end={articlesByArrival.length}
                          duration={0.5}
                        />
                      </h4>
                    </div>
                  </div>

                  <h4 className="d-flex my-3">Filter by categories</h4>
                  {/*{JSON.stringify(filteredResults)}*/}
                  <Checkbox
                    categories={categories}
                    handleFilter={(filters) =>
                      handleFilter(filters, "category")
                    }
                  />

                  <h4 className="d-flex my-3">Filter by status</h4>

                  {/*<CheckboxApproved approved={approved}*/}
                  {/*                  handleFilter={filters => (handleFilter(filters, 'approved'))}/>*/}

                  <ul className="p-0">
                    <li className="list-unstyled my-2">
                      <input
                        type="checkbox"
                        className="form-check-input mx-2"
                      />
                      <label className="form-check-lable">Approved</label>
                    </li>

                    <li className="list-unstyled my-2">
                      <input
                        type="checkbox"
                        className="form-check-input mx-2"
                      />
                      <label className="form-check-lable">Not approved</label>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Articles;
