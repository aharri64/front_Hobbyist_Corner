import React from 'react';
import { Link } from 'react-router-dom';


// CSS
import '../post.css';



const Post = (props) => {
    const { post } = props;
    console.log(post);
    const postInfo = post ?
    (<div className="post-container">
        <div className="post-header-container">
            <div ><img className="post-pic-container" src={post.image} alt="profile-pic" /></div>
            <div className="post-name-container">Name: {post.name}</div>
        </div>   
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
            {post ? postInfo : errorDiv()}
        </div>
    );

}



export default Post;