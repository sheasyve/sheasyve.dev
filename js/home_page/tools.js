function ToolsSection() {
    const toolsList = [
        { name: "GitHub / Git ", attrs: "(Version Control & Collaboration)" },
        { name: "Docker ", attrs: "(Containerization & Deployment)" },
        { name: "Cython ", attrs: "(Python Extension & Performance Optimization)" },
        { name: "scikit-learn ", attrs: "(Machine Learning & Data Mining)" },
        { name: "NumPy ", attrs: "(Numerical Computing & Array Manipulation)" },
        { name: "Pandas ", attrs: "(Data Manipulation & Analysis)" },
        { name: "Matplotlib ", attrs: "(Data Visualization)" },
        { name: "OpenGL ", attrs: "(3D Graphics & Rendering)" },
        { name: "OpenAI Gym ", attrs: "(Reinforcement Learning Environments)" },
        { name: "NeonDB ", attrs: "(Relational Databases)" }
    ];

    return (
        <div className="tools">
            <h3>Development Tools</h3>
            <ol className="numlist">
                {toolsList.map((tool, index) => (
                    <li key={index}>
                        {tool.name}
                        <span className="softwareattributes">{tool.attrs}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
