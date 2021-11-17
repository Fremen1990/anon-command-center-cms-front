import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { API } from "../config";
import { getArticles, getUsers } from "./apiCore";
import ArticleItem from "./ArticleItem";
import UserItem from "./UserItem";
import { isAuthenticated } from "../auth";
import { deleteUser } from "../admin/apiAdmin";

const Users = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const loadUsers = () => {
    getUsers().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setUsers(data);
      }
    });
  };

  const isAdmin = isAuthenticated().user.access;
  const userId = isAuthenticated().user._id;
  const adminId = isAuthenticated().user._id;

  const { token } = isAuthenticated();

  const destroyUser = (user_idToDelete) => {
    // ask about confirmation
    deleteUser(user_idToDelete, userId, token).then((data) => {
      loadUsers();
      if (data.error) {
        console.log(data.error);
      } else {
        loadUsers();
        // loadArticlesByArrival();
      }
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Layout title="Users" icon="fas fa-user" headerColor="bg-warning">
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card header">
                    <h4>Users</h4>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead className="bg-secondary text-light">
                      <tr>
                        <th>#</th>
                        <th>Role</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Bio</th>
                        {/*<th>History</th>*/}
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, i) => (
                        // JSON.stringify(user)
                        <UserItem
                          key={i}
                          user={user}
                          destroyUser={destroyUser}
                        />
                      ))}

                      {/*<tr>*/}
                      {/*    <td>1</td>*/}
                      {/*    <td>Post One</td>*/}
                      {/*    <td>Ania</td>*/}
                      {/*    <td>Science</td>*/}
                      {/*    <td>3rd July 2021</td>*/}
                      {/*    <td>*/}
                      {/*        <a href="details.html" className="btn btn-secondary">*/}
                      {/*            <i className="fas fa-angle-double-right"></i> Details*/}
                      {/*        </a>*/}

                      {/*    </td>*/}
                      {/*</tr>*/}

                      {/*<tr>*/}
                      {/*    <td>2</td>*/}
                      {/*    <td>Post Two</td>*/}
                      {/*    <td>Karol</td>*/}
                      {/*    <td>Criminal</td>*/}
                      {/*    <td>3rd July 2021</td>*/}
                      {/*    <td>*/}
                      {/*        <a href="details.html" className="btn btn-secondary">*/}
                      {/*            <i className="fas fa-angle-double-right"></i> Details*/}
                      {/*        </a>*/}

                      {/*    </td>*/}
                      {/*</tr>*/}

                      {/*<tr>*/}

                      {/*</tr>*/}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Users;
