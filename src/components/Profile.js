import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../profile.css';

//IMAGES
import croppedLogo from '../assets/cropped-logo.png';

const Profile = (props) => {
    const { handleLogout, user } = props;
    const { id, name, email, exp, profile } = user;
    console.log(user)
    // const { company, website, location, bio, skills, youtube, twitter, facebook, linkedin, instagram } = component;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    console.log("company", "====>")
    console.log(profile.company)
    // make a condition that compares exp and current time
    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login to continue.');
    }

    const userData = user ?
    (<div className="profile-container">
        <div className="profile-header-container">
            <div ><img className="profile-pic-container" src={croppedLogo} alt="profile-pic" /></div>
            <div className="user-name-container">Name: {name}</div>
        </div>
        <div className="profile-pic-btn-control">
            <button className="update-profile">Update Profile!</button>
        </div>
        <div className="user-info-title">
            {name}'s info:
        </div>
        <div className="user-info-container">
            <div className="user-info-section-container">
                <div className="user-info">Email: <br /> {email}</div>            
                <div className="user-info">ID: <br /> {id}</div>
                <div className="user-info">Location: <br /> {profile.location} </div>
            </div>
            <div className="user-info-section-container">
                <div className="user-info">Bio: <br /> {profile.bio} </div>
            </div>
            {/* <div>Skills: {profile.skills.map()}</div> */}
            <div className="user-info-section-container bottom-info">
                <div className="user-info">Company: <br /> {profile.company}</div>
                <div className="user-info">URL: <br /> {profile.website}</div>
            </div>
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