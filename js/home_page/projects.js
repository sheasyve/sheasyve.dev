
function ProjectsSection() {
    const myProjects = [
        { url: "pages/birdflow.html", name: "BirdFlow - Wind Simulator Extension for Blender", tech: "– (Cython, Python)" },
        { url: "pages/ascii_rt.html", name: "AsciiRT - Real-time ray-traced animations in the terminal.", tech: "– (CUDA, C++)" },
        { url: "pages/smb_ai.html", name: "Super AI Bros - Reinforcement Learning AI for Super Mario Bros", tech: "– (Python)" },
        { url: "pages/timer.html", name: "TeenyTimer - Cross-Platform Countdown Timer", tech: "– (Python)" }
    ];

    return (
        <>
            <h3>Projects</h3>
            {myProjects.map((project, index) => (
                <div className="projects" key={index}>
                    <a href={project.url} target="h4" className="project-link">
                        <h4>
                            <span className="assign_links">{project.name}</span>
                            <span className="highlight"> {project.tech}</span>
                        </h4>
                    </a>
                </div>
            ))}
        </>
    );
}
