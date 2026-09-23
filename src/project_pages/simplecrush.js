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
import t8 from '../../media/projects/simplecrush/t8.png';
import chords from '../../media/projects/simplecrush/chords.mp4';
import bass from '../../media/projects/simplecrush/bass.mp4';
import house_drums from '../../media/projects/simplecrush/house_drums.mp4';
import guitar from '../../media/projects/simplecrush/guitar.mp4';

import { FiDownload } from "react-icons/fi";

function SimpleCrushProject() {

    const techstack = [
        { icon: <i className="devicon-cplusplus-plain"></i>, name: "C++" },
        { icon: <img src="https://cdn.simpleicons.org/juce" alt="JUCE" style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />, name: "JUCE" }
    ];

    const downloads = [
        { label: "Download v1.3.1 Windows Installer", file: "SimpleCrush_v1.3.1_Windows.exe", url: "downloads/SimpleCrush_v1.3.1_Windows.exe" },
        { label: "Download v1.3.1 macOS zip", file: "SimpleCrush-macOS-Unsigned.zip", url: "downloads/SimpleCrush-macOS-Unsigned.zip" },
        { label: "Download v1.3.1 Windows zip", file: "SimpleCrush_v1.3.1.zip", url: "downloads/SimpleCrush.vst3.zip" }
    ];

    const videos = [
        { title: "Chords", src: chords },
        { title: "Bass", src: bass },
        { title: "House Drums", src: house_drums },
        { title: "Guitar", src: guitar }
    ];

    const features = [
        "Bit Depth Reduction: Injects quantization noise for a characteristic lo-fi sound, highly effective for adding grit to bass and drums.",
        "Sample Rate Reduction: Lowers the sample rate to induce classic aliasing artifacts and digital degradation.",
        "Mix Control: Seamlessly blends the processed signal with your dry audio for parallel processing—from subtle texture to total destruction.",
        "Filter Controls: Built-in high-pass and low-pass filters tame harsh high-end artifacts or muddy low-end frequencies.",
        "Custom Themes: 8 unique built-in color palettes, plus the ability to load custom themes from files.",
        "Dedicated Settings: A centralized menu to manage themes, data folders, UI scale, and global plugin preferences.",
        "Preset Management: A fully-featured system to save, delete, and load presets, alongside a randomization tool for quick inspiration.",
        "Interactive Tooltips: Hover over any control to reveal a concise description of its function, drastically reducing the learning curve.",
        "Dedicated Installer: Streamlines the setup process for end-users across Windows and macOS.",
        "Resizable UI: A fully scalable, SVG-backed interface ensures crisp usability across any monitor size or resolution."
    ];

    const experience = [
        "Engineered a fully functional VST3 audio plugin from scratch utilizing C++ and the JUCE framework.",
        "Deepened practical understanding of DSP concepts, specifically bit-depth reduction and sample-rate aliasing algorithms.",
        "Optimized audio processing code to balance unique sonic character with strict CPU computational efficiency.",
        "Developed a robust custom preset management system, enabling users to easily save, organize, and recall parameters.",
        "Designed and implemented an intuitive, scalable, and responsive graphical user interface.",
        "Refined UI/UX design skills by architecting a dynamic theming system with a consistent visual language.",
        "Built a reusable plugin development framework to streamline the creation of future VST projects.",
        "Wrote custom mouse-interaction logic to override default JUCE behaviors, allowing for highly precise parameter adjustments.",
        "Generated and integrated custom SVG graphics for a polished, resolution-independent professional interface."
    ];

    return (
        <div className="project-page">
            <header className="project-header">
                <a href="https://github.com/sheasyve/simplecrush" target="_blank" rel="noopener noreferrer">
                    <h1>
                        <b>SimpleCrush</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repository" />
                    </h1>
                </a>

                <div className="techstack">
                    <ul className="tech-items" style={{ flexWrap: "nowrap", listStyle: "none", margin: "0 auto", padding: 0 }}>
                        {techstack.map((tech, index) => (
                            <li key={index} className="tech-item">
                                <h4>{tech.name}</h4>
                                {tech.icon}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="headerbg">
                    <p className="mobile-only description-intro" style={{ margin: '0', paddingTop: '1rem' }}>
                        SimpleCrush is a VST3 bitcrusher plugin engineered in C++ using the JUCE framework, designed for aggressive audio destruction and unique harmonic generation.
                    </p>
                    <div className="desktop-split">
                        <div className="right-content">
                            <img src={pluginPic} alt="SimpleCrush Plugin Interface" className="plugin-pic" />
                        </div>
                        <div className="left-content">
                            <div className="description">
                                <p className="desktop-only description-intro">
                                    SimpleCrush is a VST3 bitcrusher plugin engineered in C++ using the JUCE framework, designed for aggressive audio destruction and unique harmonic generation.
                                </p>
                                {downloads.map((btn, index) => (
                                    <div key={index} className="button-wrapper">
                                        <a href={btn.url} download={btn.file} target="_blank" rel="noopener noreferrer">
                                            <FiDownload style={{ marginRight: '0.75rem' }} />
                                            {btn.label}
                                        </a>
                                    </div>
                                ))}
                                <p>Control digital degradation by independently reducing bit depth and sample rate. 
                                    Shape the resulting artifacts using built-in high-pass and low-pass filters, and blend it all with a wet/dry mix control for parallel processing.</p>

                                <div className="release-notes-snippet">
                                    <p><strong>v1.3.1 Update:</strong> Includes official macOS support, improved scaling across menus, 
                                    custom theme file loading, refreshed color palettes, alphabetical theme sorting, and a refined, modular codebase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="simplecrush-showcase">
                <section className="features">
                    <h2>Features</h2>
                    <ul className="feature-list" style={{ paddingBottom: '1rem', margin: '0 auto' }}>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <div className="plugin-vid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                        {videos.map((vid, index) => (
                            <div key={index} className="video-container" style={{ textAlign: 'center' }}>
                                <h4 className="video-title">{vid.title}</h4>
                                <LoadVideo src={vid.src} loop controls />
                            </div>
                        ))}
                    </div>

                    <div className="settings-themes-showcase">
                        <img src={settingsPic} alt="Settings Menu" className="setting-pic" />
                        <img src={presetPic} alt="Presets Menu" className="preset-pic" />
                        <img src={themePic} alt="Themes Menu" className="setting-pic" />
                    </div>

                    <p style={{ textAlign: 'center' }}>SimpleCrush features 8 unique visual themes, 
                        accessible via the central settings menu.</p>

                    <div className="theme-grid">
                        {[t1, t2, t3, t4, t5, t6, t7, t8].map((pic, i) => (
                            <img key={i} src={pic} alt={`Theme variant ${i + 1}`} className="theme-pic" loading="lazy" />
                        ))}
                    </div>

                    <p style={{ textAlign: 'center' }}>All UI preferences, including the active theme and UI scaling, 
                        are securely written to a configuration file to ensure persistence across your DAW sessions.</p>
                </section>

                <section className="technical-breakdown">
                    <h2>Technical Breakdown</h2>
                    <p>
                        SimpleCrush was built utilizing C++ and the JUCE framework. JUCE provides a robust and flexible platform for audio plugin development, 
                        allowing for low-level, efficient handling of real-time audio streams alongside complex graphical user interface design.
                    </p>
                    <p>
                        The core functionality relies on custom DSP algorithms engineered to introduce the characteristic quantization noise and aliasing distortion 
                        associated with classic hardware sampler degradation. Beyond audio processing, significant engineering was dedicated to the plugin's underlying architecture, 
                        including a bespoke preset management system, a state-saving configuration system, and customized mouse-interaction logic for refined UI control.
                    </p>
                </section>

                <section className="project-list">
                    <h2>Experience Gained</h2>
                    <ul className="experience">
                        {experience.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default SimpleCrushProject;