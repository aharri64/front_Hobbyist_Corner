import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../profile.css';
import { Redirect } from 'react-router-dom';

const { REACT_APP_SERVER_URL } = process.env;


const PostUpdate = (props) => {
    // const {user, fetchUser} = props;
    const {post, fetchPost} =props;
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
        
        const postUpdate = { image, name, id: PostUpdate.post};
        console.log(postUpdate);
        const token = localStorage.getItem('jwtToken')
        console.log(token)
            axios.post(`${REACT_APP_SERVER_URL}/users/newPost`, postUpdate, {headers:{'Authorization': token}})
            .then(response => {
                console.log('===> post updated');
                console.log(response);
                fetchPost()
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
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" value={image} onChange={handleImage} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Title</label>
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