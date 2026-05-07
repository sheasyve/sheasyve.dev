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
        { icon: <i className="devicon-sql-plain"></i>, name: " Firebird SQL" },
        { icon: <i className="devicon-nginx-original"></i>, name: " Nginx" },
        { icon: <i className="devicon-digitalocean-plain"></i>, name: " DigitalOcean" },
        { icon: <i className="devicon-cloudflare-plain"></i>, name: " Cloudflare" }
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