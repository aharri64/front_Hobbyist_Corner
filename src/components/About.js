import React from 'react';

import '../About.css';

import amir from '../assets/Amir-about-pic.jpeg'
import leo from '../assets/Leo-about-pic.jpeg'
import scott from '../assets/Scott-about-pic.jpeg'

const About = () => {
    return (
        <div>
            <h1 className="about-title text-color">About us</h1>
            <hr />
            <p className="about-content text-color">
                Hobbyist Corner is a passion project founded and developed by a team of three who all have a profound interest in various hobbies. One of the best parts of having hobbies is getting to share them with other enthusiasts and discuss one's process, ect. Here the team has come together to create a corner of the internet where people can some together share their various projects and passions with eachother.
            </p>
            <hr />
            <h3 className="sub-title text-color">Meet the team!</h3>
            <div className="meet-team-control">
                
                    <div className="amir-container about-containers">
                        <div className="text-color">Amir Herrison</div>
                        <div><img className="team-pics" src={amir} alt="Amir Herrison" /></div>
                        <ul>
                            <li><a href="https://github.com/aharri64">Amir's Github</a></li> 
                            <li><a href="https://www.linkedin.com/in/amir-scott-harrison/">Amir's LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="leo-container about-containers">
                        <div className="text-color">Leo Vincent</div>
                        <div><img className="team-pics" src={leo} alt="Leo Vincent" /></div>
                        <ul>
                            <li><a href="https://github.com/leov1963">Leo's Github</a></li>
                            <li><a href="https://www.linkedin.com/in/leovincent-tech/">Leo's LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="scott-container about-containers">
                        <div className="text-color">Scott Sherwood</div>
                        <div><img className="team-pics" src={scott} alt="Scott Sherwood" /></div>
                        <ul>
                            <li><a href="https://github.com/scott95100">Scott's Github</a></li>
                            <li><a href="https://www.linkedin.com/in/scott-sherwood-515114204/">Scott's LinkedIn</a></li>
                        </ul>
                    </div>
                </div>             
            </div>
        
    )
}

export default About;