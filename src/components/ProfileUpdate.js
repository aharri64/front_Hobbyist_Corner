import React from 'react';
import { Link } from 'react-router-dom';

import '../profile.css';

const ProfileUpdate = (props) => {
    const [company, setCompany] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');

    const handleCompany = (e) => {
        setCompany(e.target.value);
    }

    const handleSkills = (e) => {
        setSkills(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleYoutube = (e) => {
        setYoutube(e.target.value);
    }

    const handleTwitter = (e) => {
        setTwitter(e.target.value);
    }

    const handleFacebook = (e) => {
        setFacebook(e.target.value);
    }

    const handleInstagram = (e) => {
        setInstagram(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const newUser = { name, email, password };
            axios.post(`${REACT_APP_SERVER_URL}/users/register`, newUser)
            .then(response => {
                console.log('===> Yay, new user');
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log('===> Error in Signup', error));
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            alert('Password needs to be at least 8 characters. Please try again.');
        }
    }

    if (redirect) return <Redirect to="/login" /> // / double check

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Update Your Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="company" name="company" value={company} onChange={handleCompany} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills">Skills</label>
                            <input type="skills" name="skills" value={skills} onChange={handleSkills} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="location" name="location" value={location} onChange={handleLocation} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <input type="bio" name="bio" value={bio} onChange={handleBio} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="youtube">Youtube</label>
                            <input type="youtube" name="bio" value={youtube} onChange={handleYoutube} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="youtube">Youtube</label>
                            <input type="youtube" name="bio" value={youtube} onChange={handleYoutube} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdate;