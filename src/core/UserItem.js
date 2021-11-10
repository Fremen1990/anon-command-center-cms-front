import React from "react";
// import ShowImage from "./ShowImage";
// import {getUsers} from "./apiCore";

const UserItem = ({user}) => {

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

            {/*// TODO  ADD ROLES TO USERS SCHEMA, ADD IMAGE UPLOAD TO USERS, ADD BIO TO USER SCHEMA*/}

            <tr>
                <td>1</td>
                <td>ROle </td>
                <td>
                    {/*<ShowImage item={article} url="article"/>*/}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td> BIO</td>
                {/*<td> TODO ARRAY WITH HISTORICAL ARTICLES / ACHINVEMENTS - VALUE ADDED/ FINISHED WORKS FOR ANON
                 history array</td>*/}
                {/*<td>*/}

                {/*TODO USER BY ID DETAILS READ ONLY WITH NICE LAYOUT*/}
                {/*    <Link to="/" className="btn btn-secondary">*/}
                {/*        <i className="fas fa-angle-double-right">*/}
                {/*        </i> Details</Link>*/}
                {/*</td>*/}
            </tr>
        </>
    )
}
export default UserItem;