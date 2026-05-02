import React from 'react';

import LoadVideo from '../components/load-video.js';

function DevSiteProject() {

    const techstack = [
        { icon: <i className="devicon-javascript-plain"></i>, name: " JavaScript" },
        { icon: <i className="devicon-react-plain"></i>, name: " React" },
        { icon: <i className="devicon-html5-plain"></i>, name: " HTML" },
        { icon: <i className="devicon-css3-plain"></i>, name: " CSS" },
    ];

    const experience = [
        "Learned how to build a modern web application from the ground up with React 18 and a custom backend API.",
        "Built a custom Webpack 5 pipeline from scratch with HMR, code splitting, and asset minification.",
        "Engineered infrastructure with Nginx on a DigitalOcean Droplet and secured access via strict UFW/SSH policies.",
        "Automated deployment workflows, including Cloudflare DNS and domain management directly in the production build."
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
                    {techstack.map((tech, index) => (
                        <li
                            key={index}
                            className={`tech-item ${index === 0 ? 'first-item' : ''}`}
                        >
                            <h4>{tech.name}</h4>
                            {tech.icon}
                        </li>
                    ))}
                </ul>
                <h3>
                    Welcome to my developer portfolio, <strong>sheasyve.dev</strong>.
                    This project has been my personal playground for experimenting with modern web development technologies and deployment strategies.
                    Originally built as a static HTML/CSS site on GitHub Pages, I recently migrated this project to a modern full-stack React application with a firebird database on my own droplet server.
                </h3>
            </div>

            <div className="technical-breakdown">
                <h2>Overview & Architecture</h2>

                <ul>
                    <li><strong>Hosting:</strong> Self-hosted on a DigitalOcean Droplet server, served via Nginx and PM2 for firebird database management.</li>
                    <li><strong>Security & DNS:</strong> Proxied through Cloudflare with strict UFW firewall rules and hardened server access (SSH key-based authentication only).</li>
                    <li><strong>Domain Management:</strong> Automated CNAME generation built directly into the production build step for https verification.</li>
                </ul>
            </div>

            {/* <div className="showcase">  </div> */}

            <div className="technical-breakdown">

                <h2>Technical Breakdown</h2>
                <h3>Architecture Overview</h3>
                <ul>
                    <li><strong>Hosting:</strong> Self-hosted on a DigitalOcean Droplet server, served via Nginx and PM2 for firebird database management.</li>
                    <li><strong>Security & DNS:</strong> Proxied through Cloudflare with strict UFW firewall rules and hardened server access (SSH key-based authentication only).</li>
                    <li><strong>Domain Management:</strong> Automated CNAME generation built directly into the production build step for https verification.</li>
                </ul>
                
                <h3>Core Application Stack</h3>
                <ul>
                    <li><strong>Webpack 5 Deployment:</strong> Features Hot Module Replacement (HMR), lazy loading, and React Fast Refresh for immediate feedback.</li>
                    <li><strong>Database Integration:</strong> Utilizes a local Firebird database for data persistence, managed through PM2 for reliable deployment and scaling.</li>
                    <li><strong>Optimization:</strong> Implements <code>TerserPlugin</code> for JavaScript minification and <code>CssMinimizerPlugin</code> for stylesheet optimization.</li>
                    <li><strong>Asset Management:</strong> Uses <code>MiniCssExtractPlugin</code> for production CSS extraction, alongside content hashing for aggressive cache busting.</li>
                    <li><strong>Code Splitting:</strong> Automatically extracts third-party dependencies from <code>node_modules</code> into a dedicated <code>vendors</code> chunk.</li>
                    <li><strong>Transpilation:</strong> Utilizes Babel for JavaScript transpilation to ES5, ensuring compatibility with older browsers.</li>
                    <li><strong>Local Development Server:</strong> Configured with Webpack Dev Server for local development, featuring hot reloading and proxying API requests to a backend server.</li>
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
                <p>
                    Before migrating to the current architecture, the portfolio was deployed as a simple static HTML and CSS site.
                    While simpler, it lacked the modularity and developer experience improvements offered by Webpack 5 and the React 18 ecosystem.
                    This meta-project rewrite documents that architectural shift, containerized, and optimized deployment setup.
                </p>
            </div>

        </div>
    );
}

export default DevSiteProject;