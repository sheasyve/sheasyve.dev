// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js'; 
import '../css/colors.css';
import '../css/header.css';
import '../css/styles.css';
import '../css/footer.css';
import '../css/projects.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);