import React from 'react';

import LoadVideo from '../components/load-video.js';

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
            <div className="journey">
                <h2>The Journey & Iterations</h2>
                <h3>The Beginning</h3>
                <p>
                    Initially, this portfolio operated as a simple static site hosted on GitHub Pages, which allowed me to dive deep into the possibilities of HTML and CSS.
                    It began as a single-page site with one HTML file and a linked stylesheet. Over time, I added dedicated pages for each project and broke everything down into reusable components,
                    ultimately evolving into the multi-page React application and robust codebase it is today.
                </p>

                <h3>Moving to a Full-Stack Application</h3>

                <p>
                    While the static site was functional, I wanted to learn React and how to set up a live server deployment with my own backend.
                    The catalyst for this migration was the Visitor Counter. This seemed simple at first, but proved to be uniquely challenging.
                    A static frontend is sensible for a basic portfolio, but it cannot handle dynamic, global state. While I could have used client-side storage for the counter,
                    that would only track an individual user's local visits. I wanted a persistent, global counter that incremented only for unique IP addresses while anonymizing them (by masking the final octets) to protect user privacy.
                </p>
                <p>
                    Therefore, migrating to a live server deployment with my own backend and database was essential. After provisioning the server, I integrated a local Firebird database which is a lightweight,
                    embedded SQL solution perfect for Node.js applications. I wrote a custom backend API to process the visitor data and implemented PM2 to manage the application processes,
                    ensuring the server remained stable and resilient against crashes.
                </p>

                <p>
                    With the backend infrastructure now successfully in place for the visitor counter, adding dynamic features in the future should be seamless.
                    This active database connection lays the groundwork for a contact form, a blog, and other interactive elements I plan to roll out soon.
                </p>

                <h3>Developer Experience & Deployment Pipeline</h3>
                <p>
                    A major goal of this project was to establish a professional-grade workflow from local development to production.
                    By leveraging <code>concurrently</code> in my npm scripts, running <code>npm run dev</code> instantly spins up both the
                    React frontend and the Express backend. Combined with Webpack's Fast Refresh and Hot Module Replacement (HMR),
                    I can edit code in VSCode and see the changes reflected in the browser instantaneously.
                </p>
                <p>
                    When a feature is ready for production, the deployment pipeline is highly streamlined.
                    Running <code>npm run build</code> triggers Webpack to execute its production optimizations including JavaScript minification via Terser,
                    CSS extraction, asset hashing for aggressive cache-busting, and vendor code splitting.
                </p>
                <p>
                    The final code is pushed to GitHub, after which I SSH into the DigitalOcean Droplet and execute a custom Bash script (<code>deploy.sh</code>).
                    This script automatically pulls the latest main branch, safely restarts the PM2 API instances, and reloads the Nginx server.
                    The final step is a quick Cloudflare cache purge, ensuring users immediately receive the latest optimized build.
                </p>
            </div>

        </div>
    );
}

export default DevSiteProject;