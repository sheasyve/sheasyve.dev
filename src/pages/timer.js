import React from 'react';

import t1Img from '../media/projects/timer/t1.png';
import t2Img from '../media/projects/timer/t2.png';
import t3Img from '../media/projects/timer/t3.png';

function TeenyTimerProject() {
    return (
        <div className="info">
            <div className="Overview">
                <a href="https://github.com/sheasyve/TeenyTimer">
                    <h1>
                        <b>TeenyTimer - Cross-Platform Countdown Timer</b>
                        <img 
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                        />
                    </h1>
                </a>
                <h3>
                    TeenyTimer is a lightweight, cross-platform countdown timer built using Python and Tkinter.
                    Users can set a target time, and the timer will count down to zero, providing an alert upon completion.
                </h3>
                <h3>
                    The project includes pre-packaged executables for both Linux and Windows, allowing for easy setup 
                    without requiring a Python environment. For Linux users, an installation script and desktop entry 
                    are included for seamless integration.
                </h3>
                
                <img src={t1Img} alt="Timer Picture 1" />
                <img src={t2Img} alt="Timer Picture 2" />
                <img src={t3Img} alt="Timer Picture 3" />
            </div>
            
            <div className="Technical Breakdown">
                <h2>Technical Breakdown</h2>
                <h3>
                    The user interface was built with <code>Tkinter</code>, Python’s built-in GUI toolkit, allowing for 
                    a simple and responsive design. The core functionality involves a countdown mechanism that updates 
                    dynamically, ensuring smooth real-time feedback.
                </h3>
                <h3>
                    The application is packaged using <code>pyinstaller</code> to create standalone executables for Windows 
                    and Linux. A shell script automates installation for Linux users, adding a desktop entry for convenient 
                    access from the system menu.
                </h3>
            </div>
            
            <div className="Experience Gained">
                <h2>Experience Gained</h2>
                <ul className="bulletlist">
                    <li>Developed a cross-platform GUI application using Tkinter.</li>
                    <li>Learned how to package Python applications as standalone executables with <code>pyinstaller</code>.</li>
                    <li>Created automated installation scripts for Linux, improving user accessibility.</li>
                    <li>Enhanced understanding of event-driven programming and UI responsiveness.</li>
                </ul>
            </div>
        </div>
    );
}

export default TeenyTimerProject;