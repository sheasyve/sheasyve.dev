// src/home_page.js
import React from 'react';
import ProjectsSection from './home-sections/projects.js';
import ContestsSection from './home-sections/contests.js';
import InterestsSection from './home-sections/interests.js';
import LanguagesSection from './home-sections/languages.js';
import SoftwareSection from './home-sections/software.js';
import ToolsSection from './home-sections/tools.js';
import HobbiesSection from './home-sections/hobbies.js';
import ButtonComponent from '../components/button.js';
import VisitorComponent from '../components/visitor.js';

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
        </div>
    );
}

export default HomePage;