import React from 'react';
import { Link } from 'react-router-dom';

import '../profile.css';

const Profile = (props) => {
    const { handleLogout, user } = props;
    const { id, name, email, exp } = user;
   const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();

   // make a condition that compares exp and current time
    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login to continue.');
    }

    const userData = user ?
    (<div className="profile-container">
        <div className="profile-header-container">
            <div className="profile-pic-container">user-pic</div>
            <div className="user-name-container">Name: {name}</div>
        </div>
        <div className="profile-pic-btn-control">
            <button className="update-profile">Update Profile!</button>
        </div>
        <div className="user-info-title">
            {name}'s info:
        </div>
        <div className="user-info-container">
            <div>Email: <br /> {email}</div>            
            <div>ID: <br /> {id}</div>
        </div>
        <div className="posts-title">
            {name}'s posts:
        </div>
        <div className="projects-container">
            <h1>Posts</h1>
        </div>
        <div className="comments-container">
            <h1>Comments</h1>
        </div>
        <button className="add-comment-btn">Add Comment</button>
    </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;