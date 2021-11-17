import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

// import ShowImage from "./ShowImage";
// import {getUsers} from "./apiCore";

const UserItem = ({ user, destroyUser }) => {
  const isAdmin = isAuthenticated().user.access;
  const adminId = isAuthenticated().user._id;

  const { token } = isAuthenticated();

  return (
    <>
      {/*<thead className="bg-secondary text-light">*/}
      {/*<tr>*/}
      {/*    <th>#</th>*/}
      {/*    <th>Role</th>*/}
      {/*    <th>Photo</th>*/}
      {/*    <th>Name</th>*/}
      {/*    <th>Email</th>*/}
      {/*    <th>Bio</th>*/}
      {/*    /!*<th>History</th>*!/*/}
      {/*</tr>*/}
      {/*</thead>*/}

      <tr>
        <td>1</td>
        <td>ROle </td>
        <td>{/*<ShowImage item={article} url="article"/>*/}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> BIO</td>

        {/*<td> TODO ARRAY WITH HISTORICAL ARTICLES / ACHINVEMENTS - VALUE ADDED/ FINISHED WORKS FOR ANON
                 history array</td>*/}
        <td>
          {/*TODO USER BY ID DETAILS READ ONLY WITH NICE LAYOUT*/}
          <Link to={`/profile/${user._id}`} className="btn btn-info">
            <i className="fas fa-search"></i> Details
          </Link>
        </td>

        <td className={`${isAdmin ? "d-table-cell" : "d-none"}`}>
          <Link to={`/profile/${user._id}`} className="btn btn-warning ">
            <i className="fas fa-edit"></i>
            <span className="bg-warning badge h-100 d-block">Update</span>
          </Link>
        </td>

        <td className={`${isAdmin ? "d-table-cell" : "d-none"}`}>
          {" "}
          <button
            disabled
            className="btn btn-danger"
            onClick={() => destroyUser(user._id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i> Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default UserItem;
