import React from 'react';
import {Link} from "react-router-dom";
import Layout from "../core/Layout";

const SignOut = () =>

    <Layout title="ANON Member Singed Out" icon="fas fa-user-times">



<div className="container d-flex align-center justify-content">

    <button className="btn btn-success m-auto">

        <Link className="nav-link color-white" to="/signin">
            <i className="fas fa-user"></i> Signin again!
        </Link>
    </button>




</div>


    </Layout>




export default SignOut;