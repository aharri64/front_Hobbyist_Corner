import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../profile.css';
import { Redirect } from 'react-router-dom';

const { REACT_APP_SERVER_URL } = process.env;


const PostUpdate = (props) => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    
    

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }



    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        
        const postUpdate = { image, name };
            axios.post(`${REACT_APP_SERVER_URL}/users/post`, postUpdate)
            .then(response => {
                console.log('===> post updated');
                console.log(response);
                // setRedirect(true);
            })
            .catch(error => console.log('===> Error in Post', error));
    
        
    }

    // if (redirect) return <Redirect to="/login" /> // / double check

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Add a Post</h2>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className="btn btn-primary float-right">Submit Post</button>
                        <div className="form-group">
                            <label htmlFor="image">Company</label>
                            <input type="image" name="image" value={image} onChange={handleImage} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">URL</label>
                            <input type="name" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostUpdate;