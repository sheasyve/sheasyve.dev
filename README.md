# Shea Syverson | Developer Portfolio

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fsheasyve.dev&style=flat-square)](https://sheasyve.dev)

Welcome to the source code for my developer portfolio, [sheasyve.dev](https://sheasyve.dev). 

Originally built as a static HTML/CSS site, I recently migrated this project to a modern React stack.

## 🏗️ Architecture & Infrastructure

Rather than relying on managed deployment platforms, I opted to self-host this application to maintain full control over the deployment environment and security.

* **Hosting:** Self-hosted on a DigitalOcean Droplet serving static assets via Nginx.
* **Security & DNS:** Proxied through Cloudflare with strict UFW firewall rules and hardened server access (SSH key-based authentication only).
* **Domain Management:** Automated CNAME generation built directly into the production build step.

## 💻 Tech Stack

* **Core:** React 18
* **Routing:** React Router (BrowserRouter)
* **Styling:** CSS with PostCSS (Autoprefixer)
* **Build System:** Custom Webpack 5 pipeline
* **Email System** Nodemailer forwarded with Resend

### Webpack Pipeline Highlights
I built a custom Webpack configuration from scratch to optimize both the developer experience and production performance:
* **Development:** Features Hot Module Replacement (HMR) and React Fast Refresh for immediate feedback.
* **Optimization:** Implements `TerserPlugin` for JavaScript minification and `CssMinimizerPlugin` for stylesheet optimization.
* **Code Splitting:** Automatically extracts third-party dependencies from `node_modules` into a dedicated `vendors` chunk to improve browser caching and load times.
* **Asset Management:** Uses `MiniCssExtractPlugin` for production CSS extraction, alongside content hashing for aggressive cache busting.

## Installing From Zip

* Extract the zip folder.
* Drop the SimpleCrush.vst folder in your DAW's VST folder and re-load your plugins.

## Compillation

#### Prerequisites
* Node.js (v16 or higher recommended)
* npm
  
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

* `npm run start`: Spins up the Webpack dev server on `localhost:3000` with HMR and Fast Refresh enabled.
* `npm run build`: Compiles the production build into the `dist` folder for deployment on the droplet.
