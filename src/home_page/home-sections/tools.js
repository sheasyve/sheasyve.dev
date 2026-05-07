import React from 'react';

function ToolsSection() {
    const toolsList = [
        { name: "GitHub / Git ", attrs: "(Version Control & Collaboration)" },
        { name: "Docker ", attrs: "(Containerization & Deployment)" },
        { name: "Cython ", attrs: "(Python Extension & Performance Optimization)" },
        { name: "NumPy ", attrs: "(Numerical Computing & Array Manipulation)" },
        { name: "Pandas ", attrs: "(Data Manipulation & Analysis)" },
        { name: "OpenGL ", attrs: "(3D Graphics & Rendering)" },
        { name: "NeonDB ", attrs: "(Relational Databases)" },
        { name: "Webpack ", attrs: "(Module Bundler for JavaScript)" },
        { name: "CMake ", attrs: "(Cross-platform Build System)" },
        { name: "scikit-learn ", attrs: "(Machine Learning & Data Mining)" }
    ];

    return (
        <div className="tools-list">
            <h3>Development Tools</h3>
            <ol className="numlist">
                {toolsList.map((tool, index) => (
                    <li key={index}>
                        {tool.name}
                        <span className="software-attributes">{tool.attrs}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToolsSection;