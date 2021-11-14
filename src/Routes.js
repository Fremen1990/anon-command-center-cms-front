import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./user/SignUp";
import SignIn from "./user/SignIn";
import SignOut from "./user/SignOut";
import Home from "./core/Home";
import Articles from "./core/Articles";
import Projects from "./core/Projects";
import Users from "./core/Users";

import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import UserProfile from "./user/UserProfile";
import UserArticles from "./user/UserArticles";
import AddArticle from "./user/AddArticle";
import AddProject from "./admin/AddProject";
import AddUser from "./admin/AddUser";
import AdminDashboard from "./user/AdminDashboard";
import Article from "./core/Article";
import UpdateArticle from "./admin/UpdateArticle";
import UserDashboard from "./user/UserDashboard";
import AddCategory from "./admin/AddCategory";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={SignIn} />
        <PrivateRoute path="/signup" exact component={SignUp} />
        <Route path="/signout" exact component={SignOut} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/admin/AddArticle" exact component={AddArticle} />
        <PrivateRoute
          path="/admin/article/update/:articleId"
          exact
          component={UpdateArticle}
        />
        <PrivateRoute path="/articles" exact component={Articles} />
        <PrivateRoute path="/article/:articleId" exact component={Article} />
        <PrivateRoute path="/projects" exact component={Projects} />
        <PrivateRoute path="/users" exact component={Users} />
        <PrivateRoute
          path="/user/userarticles"
          exact
          component={UserArticles}
        />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/project" exact component={AddProject} />
        <AdminRoute path="/create/user" exact component={AddUser} />
        <PrivateRoute path="/profile/:userId" exact component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
