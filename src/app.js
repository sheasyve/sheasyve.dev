// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header.js';
import HomePage from './home_page/home_page.js';
import AsciiRTProject from './project_pages/ascii_rt.js';
import BirdFlowProject from './project_pages/birdflow.js';
import SuperAIBrosProject from './project_pages/smb_ai.js';
import TeenyTimerProject from './project_pages/timer.js';
import DevSiteProject from './project_pages/devsite/dev-site.js';
import VisitorComponent from './components/visitor.js';
import ButtonComponent from './components/button.js';

function App() {
    return (
        <Router>
            <div className="body">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/index.html" element={<HomePage />} />
                    <Route path="/devsite" element={<DevSiteProject />} />
                    <Route path="/ascii-rt" element={<AsciiRTProject />} />
                    <Route path="/birdflow" element={<BirdFlowProject />} />
                    <Route path="/super-ai-bros" element={<SuperAIBrosProject />} />
                    <Route path="/teeny-timer" element={<TeenyTimerProject />} />
                    <Route path="*" element={
                        <div className="home-section" style={{ textAlign: 'center', padding: '50px' }}>
                            <h1>404 - Page Not Found</h1>
                            <a href="/" style={{ color: 'var(--highlight-color)', textDecoration: 'underline' }}>Return to Home</a>
                        </div>
                    } />
                </Routes>
            </div>
            <div className="footer">
                <VisitorComponent />
            </div>         
        </Router>
    );
}

export default App;