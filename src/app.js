// src/app.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header.js';
import HomePage from './home_page.js';
import AsciiRTProject from './pages/ascii_rt.js';
import BirdFlowProject from './pages/birdflow.js';
import SuperAIBrosProject from './pages/smb_ai.js';
import TeenyTimerProject from './pages/timer.js';

function App() {
    return (
        <Router>
            <div className="body">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/index.html" element={<HomePage />} />
                    <Route path="/ascii-rt" element={<AsciiRTProject />} />
                    <Route path="/birdflow" element={<BirdFlowProject />} />
                    <Route path="/super-ai-bros" element={<SuperAIBrosProject />} />
                    <Route path="/teeny-timer" element={<TeenyTimerProject />} />
                    <Route path="*" element={
                        <div className="section" style={{ textAlign: 'center', padding: '50px' }}>
                            <h1>404 - Page Not Found</h1>
                            <a href="/" style={{ color: 'var(--highlight-color)', textDecoration: 'underline' }}>Return to Home</a>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>

    );
}

export default App;