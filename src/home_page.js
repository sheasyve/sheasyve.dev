// src/home_page.js
import React from 'react';
import ProjectsSection from './home_page/projects.js';
import ContestsSection from './home_page/contests.js';
import InterestsSection from './home_page/interests.js';
import LanguagesSection from './home_page/languages.js';
import SoftwareSection from './home_page/software.js';
import ToolsSection from './home_page/tools.js';
import HobbiesSection from './home_page/hobbies.js';
import ButtonComponent from './components/button.js';
import VisitorComponent from './components/visitor.js';

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-section"><ProjectsSection /></div>
            <div className="home-section"><ContestsSection /></div>
            <div className="home-section"><LanguagesSection /></div>
            <div className="home-section"><ToolsSection /></div>
            <div className="home-section"><SoftwareSection /></div>
            <div className="home-section"><InterestsSection /></div>
            <div className="home-section"><HobbiesSection /></div>
            <div className="footer">
                <VisitorComponent />
                <ButtonComponent />
            </div>
        </div>
    );
}

export default HomePage;