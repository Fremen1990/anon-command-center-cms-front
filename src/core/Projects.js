import React from 'react';
import Layout from "./Layout";
import {API} from "../config";

const Projects = () => (
    <>
        <Layout title="Projects" icon="fas fa-cog" headerColor="bg-primary">
        <div>
            <section id="projects">
                <div className="container">

                    <div className="row">
                        <div className="col">

                            <div className="card">
                                <div className="card header">
                                    <h4>Projects</h4>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead className="bg-secondary text-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Post One</td>
                                        <td>Ania</td>
                                        <td>Science</td>
                                        <td>3rd July 2021</td>
                                        <td>
                                            <a href="details.html" className="btn btn-secondary">
                                                <i className="fas fa-angle-double-right"></i> Details
                                            </a>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Post Two</td>
                                        <td>Karol</td>
                                        <td>Criminal</td>
                                        <td>3rd July 2021</td>
                                        <td>
                                            <a href="details.html" className="btn btn-secondary">
                                                <i className="fas fa-angle-double-right"></i> Details
                                            </a>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Post Three</td>
                                        <td>Zenek</td>
                                        <td>Society</td>
                                        <td>3rd July 2021</td>
                                        <td>
                                            <a href="details.html" className="btn btn-secondary">
                                                <i className="fas fa-angle-double-right"></i> Details
                                            </a>

                                        </td>
                                    </tr>


                                    </tbody>
                                </table>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    </Layout>

</>

)

export default Projects;