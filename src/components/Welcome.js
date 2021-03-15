import React from 'react';

import '../Welcome.css'

const Welcome = () => {
    return (
        <div>
            <h1 className="welcome-title text">Welcome to Hobbyiest Corner!</h1>
            <h3 className="welcome-sub-title text"><a class="new-link" href="/signup">Create a profile</a> and share your projects with our community!</h3>
        </div>
    )
}

export default Welcome;