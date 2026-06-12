import React from 'react';

import LoadVideo from '../components/load-video.js';
import pluginPic from '../../media/projects/simplecrush/plugin.png';

function SimpleCrushProject() {

    const techstack = [
        { icon: <i className="devicon-cpp-plain"></i>, name: " C++" },
        { icon: <i className="devicon-juce-plain"></i>, name: " JUCE" }
    ];

    const experience = ["Experience gained in audio plugin development using C++ and JUCE."];

    return (
        <div className="project-page">
            <div className="project-header">
                <a href="https://github.com/sheasyve/simplecrush">
                    <h1>
                        <b>SimpleCrush</b>
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

                <h3 style={{textAlign: 'center'}}>
                    SimpleCrush is a VST3 bitcrusher plugin built with C++ and the JUCE framework.
                    <br></br>
                    The plugin allows users to reduce the bit depth and sample rate of audio, with built in mix and filter controls.
                    <br></br>
                    This plugin and is in early development, but is fully functional. This writeup is a work in progress and will be updated with more technical details and experience gained as development continues.
                </h3>
            </div>

            <div className="simplecrush-showcase">
                
                <div className="technical-breakdown">
                    <h2>Technical Breakdown</h2>
                    <p>The plugin was built using C++ and the JUCE framework.
                    JUCE provides a powerful and flexible platform for audio plugin development, allowing for efficient handling of audio processing and user interface design. The plugin's core functionality is implemented in C++, leveraging JUCE's audio processing capabilities to manipulate the audio signal in real-time. The bit depth and sample rate reduction algorithms are designed to introduce the characteristic distortion associated with bitcrushing, while the mix and filter controls allow users to remove unpleasant high and low frequencies. The development process involved iterating on the audio processing algorithms to achieve the desired sound quality and performance, as well as designing an intuitive user interface for seamless interaction with the plugin.</p>
                        <img src={pluginPic} alt="SimpleCrush Plugin" className="plugin-pic" style={{margin: '0 auto', display: 'block'}} />

                </div>

                <div className="project-list">
                    <h2>Experience Gained</h2>
                    <ul className="experience">
                        {experience.map((exp, index) => (
                            <li key={index}>{exp}</li>))}
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default SimpleCrushProject;