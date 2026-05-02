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
        "Migrated from a static HTML/CSS site to a robust, self-hosted modern React 18 stack.",
        "Built a custom Webpack 5 pipeline from scratch with HMR, code splitting, and asset minification.",
        "Engineered infrastructure with Nginx on a DigitalOcean Droplet and secured access via strict UFW/SSH policies.",
        "Automated deployment workflows, including Cloudflare DNS and domain management directly in the production build."
    ];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/my-website">
                    <h1>
                        <b>Sheasyve.dev Development Writeup</b>
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
                    Welcome to the writeup for my developer portfolio, <strong>sheasyve.dev</strong>.
                    Originally built as a static HTML/CSS site, I recently migrated this project to a modern React stack.
                    Rather than relying on managed deployment platforms, I opted to self-host this application to maintain full control over the deployment environment and security.
                </h3>
            </div>

            <div className="technical-breakdown">
                <h2>Overview & Architecture</h2>

                <ul>
                    <li><strong>Hosting:</strong> Self-hosted on a DigitalOcean Droplet serving static assets via Nginx.</li>
                    <li><strong>Security & DNS:</strong> Proxied through Cloudflare with strict UFW firewall rules and hardened server access (SSH key-based authentication only).</li>
                    <li><strong>Domain Management:</strong> Automated CNAME generation built directly into the production build step.</li>
                </ul>
            </div>

            {/* <div className="showcase">  </div> */}

            <div className="technical-breakdown">
                <h2>Technical Breakdown</h2>
                <p>The core application stack relies on React 18, React Router, and a custom Webpack 5 pipeline:</p>
                <ul>
                    <li><strong>Webpack 5 Development:</strong> Features Hot Module Replacement (HMR) and React Fast Refresh for immediate feedback.</li>
                    <li><strong>Optimization:</strong> Implements <code>TerserPlugin</code> for JavaScript minification and <code>CssMinimizerPlugin</code> for stylesheet optimization.</li>
                    <li><strong>Code Splitting:</strong> Automatically extracts third-party dependencies from <code>node_modules</code> into a dedicated <code>vendors</code> chunk.</li>
                    <li><strong>Asset Management:</strong> Uses <code>MiniCssExtractPlugin</code> for production CSS extraction, alongside content hashing for aggressive cache busting.</li>
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
            {/*}
            <div className="Previous Attempts">
                <h2>Previous Attempts & Iterations</h2>
                <p>
                    Before migrating to the current architecture, the portfolio was deployed as a simple static HTML and CSS site.
                    While simpler, it lacked the modularity and developer experience improvements offered by Webpack 5 and the React 18 ecosystem.
                    This meta-project rewrite documents that architectural shift, containerized, and optimized deployment setup.
                </p>
            </div>
            */}
        </div>
    );
}

export default DevSiteProject;