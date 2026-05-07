import React from 'react';

import LoadVideo from '../components/load-video.js';

function ProjectTemplate() {

    const techstack = [];

    const experience = [];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/project">
                    <h1>
                        <b>Project Title</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo" />
                    </h1>
                </a>

                <ul className="techstack">
                    {techstack.map((tech, index) => (
                        <li key={index} className="tech-item">
                            <h4>{tech.name}</h4>
                            {tech.icon}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="showcase">

            </div>

            <div className="technical-breakdown">

            </div>

            <div className="project-list">
                <h2>Experience Gained</h2>
                <ul className="experience">
                    {experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>

            <div className="previous-attempts">

            </div>

        </div>
    );
}

export default ProjectTemplate;