import React from 'react';

import LoadVideo from '../../components/load-video.js';
import JourneySection from './dev-journey.js';

function DevSiteProject() {

    const techstack = [
        { icon: <i className="devicon-javascript-plain"></i>, name: " JavaScript" },
        { icon: <i className="devicon-react-plain"></i>, name: " React" },
        { icon: <i className="devicon-html5-plain"></i>, name: " HTML" },
        { icon: <i className="devicon-css3-plain"></i>, name: " CSS" },
        { icon: <i className="devicon-webpack-plain"></i>, name: " Webpack" },
        { icon: <i><svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M12 2s.06 4.7-2.6 7c0 0-1.74-2.81-1.39-5C4.24 7.21 2 11.23 2 14c0 4.88 4.22 8 10 8s10-3.64 10-8.89C22 7.07 14.5 2 12 2zm3.3 14.18c-.84.9-2.31 1.57-3.3 1.57-2.11 0-3.11-1.63-1.62-3.71.16-.22.38-.46.59-.69.57-.65 1.25-1.42 1.37-2.4 1.14 1.17 2.15 3.32 1.96 5.23z"/></svg></i>, name: "Firebird SQL" },
        { icon: <i className="devicon-nginx-original"></i>, name: " Nginx" },
        { icon: (<i><svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <path d="M22.03 14.591c-.015-.126-.03-.255-.054-.384a3.633 3.633 0 00-3.321-2.906 5.534 5.534 0 00-5.184-3.834 5.483 5.483 0 00-4.14 1.884 4.106 4.106 0 00-2.946-.226 4.143 4.143 0 00-2.8 3.76c0 .085.006.168.012.252A4.544 4.544 0 001.5 17.524c0 2.471 2.031 4.476 4.537 4.476h13.737c2.334 0 4.226-1.865 4.226-4.162a4.116 4.116 0 00-1.97-3.247z" />
                </svg></i>), name: "Cloudflare"}
    ];

    const experience = [
        "Architected a modern web application from the ground up using React 18 and a custom backend API.",
        "Engineered a custom Webpack 5 pipeline from scratch, implementing HMR, code splitting, and asset minification.",
        "Provisioned and secured infrastructure on a DigitalOcean Droplet using Nginx, enforcing strict UFW firewall rules and SSH key-based authentication.",
        "Integrated Cloudflare DNS and domain management directly into the production build process.",
        "Designed a seamless local development experience using Concurrently to run the frontend Webpack server and backend Node API simultaneously with full Hot Module Replacement.",
        "Authored a custom Bash deployment script to automate Git pulls, PM2 process management, and Nginx server reloads directly on the Droplet."
    ];

    const architecture = [
        { label: "Hosting:", text: "Self-hosted on a DigitalOcean Droplet, served via Nginx with application processes managed by PM2." },
        { label: "Security & DNS:", text: "Proxied through Cloudflare with strict UFW firewall rules and hardened server access (SSH key-based authentication only)." },
        { label: "Domain Management:", text: "Automated CNAME generation built directly into the production build step for HTTPS verification." }
    ];

    const coreStack = [
        { label: "Webpack 5 Deployment:", text: "Features Hot Module Replacement (HMR), lazy loading, and React Fast Refresh for immediate developer feedback." },
        { label: "Database Integration:", text: "Utilizes a local Firebird database for data persistence, with the backend API managed through PM2 for reliable scaling." },
        { label: "Optimization:", text: <>Implements <code>TerserPlugin</code> for JavaScript minification and <code>CssMinimizerPlugin</code> for stylesheet optimization.</> },
        { label: "Asset Management:", text: <>Uses <code>MiniCssExtractPlugin</code> for production CSS extraction, alongside content hashing for aggressive cache busting.</> },
        { label: "Code Splitting:", text: <>Automatically extracts third-party dependencies from <code>node_modules</code> into a dedicated <code>vendors</code> chunk.</> },
        { label: "Transpilation:", text: "Utilizes Babel for JavaScript transpilation to ES5, ensuring robust compatibility with older browsers." },
        { label: "Local Development Server:", text: "Configured with Webpack Dev Server for local development, featuring hot reloading and proxying API requests to the backend." },
        { label: "PostCSS & Autoprefixer:", text: "Integrates PostCSS into the CSS pipeline to automatically parse and add vendor prefixes, ensuring cross-browser compatibility." },
        { label: "Concurrent Environment:", text: <>Utilizes <code>concurrently</code> to bridge the React frontend and Express backend during development, proxying API requests to avoid CORS issues.</> }
    ];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/sheasyve.dev">
                    <h1>
                        <b>sheasyve.dev Writeup</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo" />
                    </h1>
                </a>

                <ul className="techstack">
                    <div className="tech-items">
                        {techstack.map((tech, index) => (
                            <li
                                key={index}
                                className={`tech-item ${index === 0 ? 'first-item' : ''}`}
                            >
                                <h4>{tech.name}</h4>
                                {tech.icon}
                            </li>
                        ))
                        }
                    </div>
                </ul>

                <h3 style={{ textAlign: "center", lineHeight: "1.8" }}>
                    This project served as a comprehensive testing ground for exploring modern web development technologies and deployment strategies.
                    <br></br>
                    Originally built as a static HTML/CSS site on GitHub Pages, I successfully migrated the architecture to a full-stack React application to improve scalability and maintainability.
                </h3>
            </div>

            <div className="technical-breakdown">
                <h2>Technical Breakdown</h2>
                <p>Building this application provided hands-on experience integrating JavaScript, React, CSS, and Firebird SQL, ultimately culminating in a fully self-hosted deployment.</p>

                <h3>Architecture Overview</h3>
                <ul>
                    {architecture.map((item, index) => (
                        <li key={index}><strong>{item.label}</strong> {item.text}</li>
                    ))}
                </ul>

                <h3>Core Application Stack</h3>
                <ul>
                    {coreStack.map((item, index) => (
                        <li key={index}><strong>{item.label}</strong> {item.text}</li>
                    ))}
                </ul>
            </div>

            <div className="project-list">
                <h2>Experience Gained</h2>
                <ul className="experience">
                    {experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>

            <JourneySection />

        </div>
    );
}

export default DevSiteProject;