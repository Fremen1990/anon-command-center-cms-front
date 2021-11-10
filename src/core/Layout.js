import React from 'react';
// import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({
                    title = "Title",
                    headerColor = "headerColor",
                    description ,
                    icon,
                    className, children
                }) => (

    <>
        <div>
            <Menu/>
            <div className="jumbotron">
                <header id="main-header" className={"py-2 bg-gradient text-white" + ` ${headerColor}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>
                                    <i className={icon}></i>
                                    <span className="mx-3">{title}</span>
                                    <span className="d-block m-3">{description} </span>
                                </h1>

                            </div>

                        </div>

                    </div>
                </header>

                <div className={className}>{children}</div>
                {/*<Footer/>*/}
            </div>
        </div>
    </>

);

export default Layout;