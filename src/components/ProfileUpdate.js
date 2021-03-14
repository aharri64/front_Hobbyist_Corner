import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../profile.css';
import { Redirect } from 'react-router-dom';

const { REACT_APP_SERVER_URL } = process.env;


const ProfileUpdate = (props) => {
    const {user, fetchUser} = props;
    const [company, setCompany] = useState('');
    const [skills, setSkills] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    

    const handleCompany = (e) => {
        setCompany(e.target.value);
    }

    const handleWebsite = (e) => {
        setWebsite(e.target.value);
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

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        
        const profileUpdate = { company, skills, website, location, bio, id: user.id };
        console.log(profileUpdate);
        const token = localStorage.getItem('jwtToken')
        console.log(token)
        axios.post(`${REACT_APP_SERVER_URL}/users/profile`, profileUpdate, {headers:{'Authorization': token}})
            .then(response => {
                console.log('===> profile updated');
                console.log(response);
                fetchUser()
                // setRedirect(true);
            })
            .catch(error => console.log('===> Error in Profile', error));
    
        
    }

    // if (redirect) return <Redirect to="/login" /> // / double check

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Update Your Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className="btn btn-primary float-right">Submit Update</button>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="company" name="company" value={company} onChange={handleCompany} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="website">URL</label>
                            <input type="website" name="website" value={website} onChange={handleWebsite} className="form-control" />
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
                        <button type="submit" className="btn btn-primary float-right">Submit Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdate;
