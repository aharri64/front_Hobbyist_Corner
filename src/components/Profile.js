import React from 'react';
import { Link } from 'react-router-dom';


// CSS
import '../profile.css';

//IMAGES
import croppedLogo from '../assets/cropped-logo.png';

const Profile = (props) => {
    const { user, post } = props;
    console.log(user);
    const userInfo = user ?
    (<div className="profile-container">
        <div className="profile-header-container">
            <div ><img className="profile-pic-container" src={croppedLogo} alt="profile-pic" /></div>
            <div className="user-name-container">Name: {user.name}</div>
        </div>
        <div className="title">
            {user.name}'s info:
        </div>
        <div className="user-info-container">
            <div className="user-info-section-container">
                <div className="user-info">Email: <br /> {user.email}</div>
                <div className="user-info">Location: <br /> {user.location} </div>
            </div>
            <div className="user-info-section-container">
                <div className="user-info">Bio: <br /> {user.bio} </div>
            </div>
            {/* <div>Skills: {profile.skills.map()}</div> */}
            <div className="user-info-section-container bottom-info">
                <div className="user-info">Company: <br /> {user.company}</div>
                <div className="user-info">URL: <br /> {user.website}</div>
            </div>
        </div>
        <div className="title">
            {user.name}'s posts:
        </div>
        <div className="projects-container">
            <h1>Posts</h1>
            { post }
        </div>
        <div className="comments-container">
            <h1>Comments</h1>
        </div>
        <button className="profile-btn comment-btn">Add Comment</button>
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
            {user ? userInfo : errorDiv()}
        </div>
    );

}



export default Profile;