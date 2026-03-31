import React from 'react';

function SuperAIBrosProject() {
    return (
        <div className="info">
            <div className="Overview">
                <a href="https://github.com/sheasyve/super-mario-rl">
                    <h1>
                        <b>Super AI Bros - Reinforcement Learning AI for Super Mario Bros</b>
                        <img 
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                        />
                    </h1>
                </a>
                <h3>
                    Super AI Bros is a reinforcement learning (RL) experiment aimed at training an AI agent to play
                    Super Mario Bros. This project was undertaken by a group of undergraduate students at the
                    University of Victoria, exploring RL techniques for solving complex, interactive environments.
                </h3>
                <h3>
                    Reinforcement learning is a fundamental approach in developing human-like or
                    superhuman AI, with applications ranging from robotics to autonomous systems.
                    Through iterative training, the AI learns optimal strategies by interacting with
                    the game environment, improving performance over time.
                </h3>
                <video autoPlay loop muted>
                    <source src="media/projects/amb_ai/mario_demo.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div className="Technical Breakdown">
                <h2>Technical Breakdown</h2>
                <h3>
                    The project used the <code>gym-super-mario-bros</code> 7.4.0 Python package to simulate the game environment. 
                    The RL agent was trained using deep Q-learning (DQN), a model-free algorithm that optimizes actions based on 
                    past rewards.
                </h3>
                <h3>
                    A key challenge was optimizing the agents hyperparameters to balance exploration and exploitation. 
                    Despite adjustments, training was constrained by hardware limitations, significantly reducing the number 
                    of iterations we could run. As a result, while the agent learned to navigate obstacles and progress through 
                    the first level, it did not achieve full completion or high-level gameplay proficiency.
                </h3>
                <h3>
                    The model's performance was evaluated using reward tracking and visualization tools to analyze 
                    action efficiency over time. Future improvements could include using more advanced RL techniques 
                    like Proximal Policy Optimization (PPO) or distributed training to accelerate learning.
                </h3>
            </div>
            
            <div className="Experience Gained">
                <h2>Experience Gained</h2>
                <ul className="bulletlist">
                    <li>Reinforcement Learning can successfully train agents in classic platformer games, but convergence 
                        requires extensive training.</li>
                    <li>Computational limitations significantly impact RL training speed and effectiveness.</li>
                    <li>Hyperparameter tuning plays a crucial role in optimizing AI learning but has diminishing 
                        returns without sufficient training iterations.</li>
                    <li>Future projects would benefit from cloud-based training or GPU-accelerated reinforcement 
                        learning frameworks.</li>
                </ul>
            </div>
        </div>
    );
}

const projectDiv = document.getElementById('project-content');
if (projectDiv) {
    const projectRoot = ReactDOM.createRoot(projectDiv);
    projectRoot.render(<SuperAIBrosProject />);
}

export default SuperAIBrosProject;