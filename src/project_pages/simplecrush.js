import React from 'react';
import LoadVideo from '../components/load-video.js';
import pluginPic from '../../media/projects/simplecrush/plugin.png';
import settingsPic from '../../media/projects/simplecrush/settings.png';
import themePic from '../../media/projects/simplecrush/themes.png';
import presetPic from '../../media/projects/simplecrush/presets.png';
import t1 from '../../media/projects/simplecrush/t1.png';
import t2 from '../../media/projects/simplecrush/t2.png';
import t3 from '../../media/projects/simplecrush/t3.png';
import t4 from '../../media/projects/simplecrush/t4.png';
import t5 from '../../media/projects/simplecrush/t5.png';
import t6 from '../../media/projects/simplecrush/t6.png';
import t7 from '../../media/projects/simplecrush/t7.png';
import demo from '../../media/projects/simplecrush/demo.mp4';
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  return (
    <a 
      href="downloads/SimpleCrush.vst3.zip" 
      download="SimpleCrush.vst3.zip"
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#007bff",
        fontWeight: "bold"
      }}
    >
      <FiDownload />
      Download Plugin
    </a>
  );
};

function SimpleCrushProject() {

    const techstack = [{ icon: <i className="devicon-cplusplus-plain"></i>, name: " C++" },
    { icon: <img src="https://cdn.simpleicons.org/juce" alt="JUCE" style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />, name: " JUCE" }];

    const features = [
        "Bit Depth Reduction: Users can reduce the bit depth of the audio signal, introducing quantization noise and creating a characteristic lo-fi sound. It also works great on bass and drums.",
        "Sample Rate Reduction: The plugin allows users to lower the sample rate of the audio, resulting in aliasing artifacts that contribute to the bitcrushed effect.",
        "Mix Control: A mix control enables users to blend the processed (bitcrushed) signal with the original dry signal, allowing for subtle or extreme effects.",
        "Filter Controls: Built-in high-pass and low-pass filters allow users to remove unpleasant high and low frequencies that can arise from bitcrushing, providing more control over the final sound.",
        "Themes: Seven unique color themes are available for users to customize the plugin's appearance, enhancing the visual experience and allowing for personal preference.",
        "Resizable UI: The plugin's user interface can be resized, allowing users to adjust the layout to their preference and screen size",
        "Settings Menu: A settings menu provides access to various configuration options, including theme selection and other plugin preferences.",
        "Presets: A fully featured preset system is complete with save, delete, load, random knob, and folder selection."
    ];

    const experience = ["Learned how to create VST3 plugins using C++ and the JUCE framework.",
        "Developed a deeper understanding of digital audio processing concepts, including bit depth and sample rate reduction algorithms.",
        "Gained experience in designing and implementing user interfaces for audio plugins, ensuring an intuitive and visually appealing user experience.",
        "Iterated on audio processing algorithms to achieve the desired sound quality and performance, balancing the trade-offs between audio fidelity and computational efficiency.",
        "Learned how to implement a preset system for audio plugins, allowing users to save and recall their preferred settings.",
        "Created a beautiful custom user interface with a consistent look and feel across different themes, enhancing my eye for design and user experience.",
        "Implemented a fully custom plugin development framework which I can reuse to create more plugins with a consistent look and feel, and with a more efficient development process."
    ];

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
                    <div className="tech-items" style={{ "flex-wrap": "nowrap" }}>
                        {techstack.map((tech, index) => (
                            <li key={index} className="tech-item">
                                <h4>{tech.name}</h4>
                                {tech.icon}
                            </li>
                        ))}</div>
                </ul>

                <h3 style={{ textAlign: 'center' }}>
                    SimpleCrush is a VST3 bitcrusher plugin built with C++ and the JUCE framework.
                    <br></br>
                    <DownloadButton />
                    <img src={pluginPic} alt="SimpleCrush Plugin" className="plugin-pic" style={{ margin: '1rem auto', display: 'block' }} />
                    The plugin allows users to reduce the bit depth and sample rate of audio, with built in mix and filter controls.
                    There is also a settings menu with 7 unique color themes, a resizing tool, and a preset system with a randomizer.
                    This writeup is a work in progress and will be updated with more technical details and experience gained as development continues.
                    <br></br><br></br>
                    Currently I am finishing up the presets menu, and tuning the UI a bit more. 
                    After that, I will be bundling an installer and adding hover hints that can be toggled in settings.
                </h3>

            </div>

            <div className="simplecrush-showcase">
                <div className="features">
                    <h2>Features</h2>
                    <ul className="feature-list" style={{ paddingBottom: '1rem' }}>
                        {features.map((exp, index) => (
                            <li key={index}>{exp}</li>))}
                    </ul>
                    <div className="plugin-vid">
                        <LoadVideo src={demo} loop controls />
                    </div>
                    <div className="settings-themes-showcase">
                        <img src={settingsPic} alt="SimpleCrush Settings" className="setting-pic" />
                        <img src={presetPic} alt="SimpleCrush Presets" className="preset-pic" />
                        <img src={themePic} alt="SimpleCrush Themes" className="setting-pic" />
                    </div>
                    <p style={{ textAlign: 'center' }}>I have now finished implementing 7 unique themes that can be selected in the settings menu.</p>
                    <div className="theme-grid">
                        {[t1, t2, t3, t4, t5, t6, t7].map((pic, i) => (
                            <img key={i} src={pic} alt={`Theme ${i + 1}`} className="theme-pic" />
                        ))}
                    </div>
                    <p style={{ textAlign: 'center' }}>The settings are saved in a file which is loaded on startup to be persistent across sessions.</p>
                </div>

                <div className="technical-breakdown">
                    <h2>Technical Breakdown</h2>
                    <p>The plugin was built using C++ and the JUCE framework.
                        JUCE provides a powerful and flexible platform for audio plugin development, allowing for efficient handling of audio processing and user interface design. The plugin's core functionality is implemented in C++, leveraging JUCE's audio processing capabilities to manipulate the audio signal in real-time.
                        <br></br><br></br>
                        The bit depth and sample rate reduction algorithms are designed to introduce the characteristic distortion associated with bitcrushing, while the mix and filter controls allow users to remove unpleasant high and low frequencies. The development process involved iterating on the audio processing algorithms to achieve the desired sound quality and performance, as well as designing an intuitive user interface for seamless interaction with the plugin.</p>
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