import React from 'react';

function JourneySection() {
    return (
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
    );
}

export default JourneySection;