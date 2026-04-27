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

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-section"><ProjectsSection /></div>
            <div className="home-section"><ContestsSection /></div>
            <div className="home-section"><LanguagesSection /></div>
            <div className="list"><ToolsSection /></div>
            <div className="list"><SoftwareSection /></div>
            <div className="list"><InterestsSection /></div>
            <div className="list"><HobbiesSection /></div> 
            <div className="button">
                <ButtonComponent />
            </div>
        </div>
    );
}

export default HomePage;