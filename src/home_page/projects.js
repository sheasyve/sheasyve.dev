// src/home_page/projects.js
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

function ProjectsSection() {
    const myProjects = [
        { url: "/birdflow", name: "BirdFlow - Wind Simulator Extension for Blender", tech: "– (Cython, Python)" },
        { url: "/ascii-rt", name: "AsciiRT - Real-time ray-traced animations in the terminal.", tech: "– (CUDA, C++)" },
        { url: "/super-ai-bros", name: "Super AI Bros - Reinforcement Learning AI for Super Mario Bros", tech: "– (Python)" },
        { url: "/teeny-timer", name: "TeenyTimer - Cross-Platform Countdown Timer", tech: "– (Python)" }
    ];

    return (
        <>
            <h3>Projects</h3>
            {myProjects.map((project, index) => (
                <div className="projects" key={index}>
                    {/* 3. Change <a> to <Link> and href to to */}
                    <Link to={project.url} className="project-link">
                        <h4>
                            <span className="assign_links">{project.name}</span>
                            <span className="highlight"> {project.tech}</span>
                        </h4>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default ProjectsSection;