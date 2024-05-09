import React from 'react';
import './project.css';

const Project = ({ title, cardimage, description }) => {
    return (
        <div>
            <div className="project">
                <div className="headline">
                    <h4>{title}</h4>
                </div>

                <div className="project-image">
                    <img src={cardimage} alt={title}/>
                </div>
            </div>
            <div className="project-description">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;