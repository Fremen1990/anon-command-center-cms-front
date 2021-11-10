import React , {Component} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";


const UserProfile = () => {

    const {user: {_id, name, email, role, access}} = isAuthenticated();


    return (
        <Layout title="UserProfile" headerColor="bg-warning" description={name}>

            <section className="profile my-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-9">

                            <div className="card">
                                <div className="card header p-3">
                                    <h4>Edit Profile</h4>
                                </div>

                                <div className="card-body">

                                    <form>

                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" value={name}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name">Email</label>
                                            <input type="email" className="form-control" value={email}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name">Role</label>
                                            <input type="email" className="form-control" value={role}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name">Access</label>
                                            <input type="email" className="form-control" value={access ===1 ? "Admin" : "Registered User"}/>
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="bio">Bio</label>


                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data="<p>Hello! Tell me sth about you :) </p>"
                                                onReady={ editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log( 'Editor is ready to use!', editor );
                                                } }
                                                onChange={ ( event, editor ) => {
                                                    const data = editor.getData();
                                                    console.log( { event, editor, data } );
                                                } }
                                                onBlur={ ( event, editor ) => {
                                                    console.log( 'Blur.', editor );
                                                } }
                                                onFocus={ ( event, editor ) => {
                                                    console.log( 'Focus.', editor );
                                                } }
                                            />


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h3>Your Avatar</h3>
                            <img src='/img/avatar.png' alt="Avatarrr" className="d-block img-fluid mb-3"/>
                            <button className="btn btn-info btn-block mx-3">Edit Image</button>
                            <button className="btn btn-danger btn-block mx-3">Delete Image</button>
                        </div>

                    </div>
                </div>
            </section>

        </Layout>


    )
}

export default UserProfile;