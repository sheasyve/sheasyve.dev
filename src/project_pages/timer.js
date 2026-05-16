import React from 'react';

import t1Img from '../../media/projects/timer/t1.png';
import t2Img from '../../media/projects/timer/t2.png';
import t3Img from '../../media/projects/timer/t3.png';

function TeenyTimerProject() {
    const techstack = [
        { icon: <i className="devicon-python-plain"></i>, name: " Python" },
        { icon: <i className="devicon-tkinter-plain"></i>, name: " Tkinter" },
        { icon: <i className="devicon-pyinstaller-plain"></i>, name: " PyInstaller" }
    ];

    const experience = [
        "Developed a cross-platform GUI application using Tkinter.",
        "Learned how to package Python applications as standalone executables with pyinstaller.",
        "Created automated installation scripts for Linux, improving user accessibility.",
        "Enhanced understanding of event-driven programming and UI responsiveness.",
        "Gained experience in designing user-friendly interfaces for simple utility applications."
    ];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/TeenyTimer">
                    <h1>
                        <b>TeenyTimer - Cross-Platform Countdown Timer</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo" />
                    </h1>
                </a>

                <ul className="techstack">
                    <div className="tech-items">
                        {techstack.map((tech, index) => (
                            <li key={index} className="tech-item">
                                <h4>{tech.name}</h4>
                                {tech.icon}
                            </li>
                        ))}</div>
                </ul>

                <h3>
                    TeenyTimer is a lightweight, cross-platform countdown timer built using Python and Tkinter.
                    Users can set a target time, and the timer will count down to zero, providing an alert upon completion.
                    <br></br>
                    The project includes pre-packaged executables for both Linux and Windows, allowing for easy setup
                    without requiring a Python environment. For Linux users, an installation script and desktop entry
                    are included for seamless integration.
                </h3>
            </div>

            <img src={t1Img} alt="Timer Picture 1" />
            <img src={t2Img} alt="Timer Picture 2" />
            <img src={t3Img} alt="Timer Picture 3" />

            <div className="technical-breakdown">

                <h2>Technical Breakdown</h2>
                <p>
                    The user interface was built with <code>Tkinter</code>, Python’s built-in GUI toolkit, allowing for
                    a simple and responsive design. The core functionality involves a countdown mechanism that updates
                    dynamically, ensuring smooth real-time feedback.
                    <br></br>
                    The application is packaged using <code>pyinstaller</code> to create standalone executables for Windows
                    and Linux. A shell script automates installation for Linux users, adding a desktop entry for convenient
                    access from the system menu.
                </p>

            </div>

            <div className="project-list">
                <h2>Experience Gained</h2>
                <ul className="experience">
                    {experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default TeenyTimerProject;