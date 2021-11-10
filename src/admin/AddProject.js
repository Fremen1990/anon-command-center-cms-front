import React, {useState} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";
import {Link} from 'react-router-dom';
import {createProject} from "./apiAdmin"


const AddProject = () => {

    // hooks
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

//destructure user and token from localstorage
    const {user, token} = isAuthenticated();


    const handleChange = (e) => {
        setError('')
        setName(e.target.value);
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false)

        // make request to API to create Project in BackEnd
        createProject(user._id, token, {name})
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setError('');
                    setSuccess(true);
                }
            })
    }

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">Success! {name} is created</h3>
        }
    }

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Error! {name} is already created</h3>
        }
    }


    const goBack = () => (
        <div className="mt-5">
            <Link to="/" className="text-warning">Go Back</Link>
        </div>
        )



    const newProjectForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Project Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={name} autoFocus/>
            </div>
            <button className="btn btn-outline-primary my-3">Create Project</button>
        </form>
    )


    return (
        <Layout title="Add a new project" description={user.name} headerColor="bg-primary">

            <div className="row">

                <div className="col-md-4 offset-md-4 my-3">
                    {showSuccess()}
                    {showError()}
                    {newProjectForm()}
                    {goBack()}
                </div>

            </div>

        </Layout>


    )
}

export default AddProject;