import React from 'react';
import marioDemoVid from '../media/projects/amb_ai/mario_demo.webm';
import LoadVideo from '../components/load-video.js';

function SuperAIBrosProject() {
    const techstack = [
        { icon: <i className="devicon-python-plain"></i>, name: " Python" },
        { icon: <i className="devicon-docker-plain"></i>, name: " Docker" },
        { icon: <i className="devicon-openai-plain"></i>, name: " OpenAI Gym" }
    ];

    const experience = ["Reinforcement Learning can successfully train agents in classic platformer games, but convergence requires extensive training.",
        "Computational limitations significantly impact RL training speed and effectiveness.",
        "Hyperparameter tuning plays a crucial role in optimizing AI learning but has diminishing returns without sufficient training iterations.",
        "Future projects would benefit from cloud-based training or GPU-accelerated reinforcement learning frameworks."
    ];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/super-mario-rl">
                    <h1>
                        <b>Super AI Bros - Reinforcement Learning AI for Super Mario Bros</b>
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo" />
                    </h1>
                </a>

                <ul className="techstack">
                    <div className="tech-items">
                        {techstack.map((tech, index) => (
                            <li key={index} className="tech-item">
                                <h4>{tech.name}</h4>
                                {tech.icon}
                            </li>
                        ))}</div>
                </ul>

                <h3>
                    Super AI Bros is a reinforcement learning (RL) experiment aimed at training an AI agent to play
                    Super Mario Bros. This project was undertaken by a group of undergraduate students at the
                    University of Victoria, exploring RL techniques for solving complex, interactive environments.
                </h3>
            </div>


            <LoadVideo src={marioDemoVid} autoPlay loop muted />

            <div className="technical-breakdown">
                <h2>Technical Breakdown</h2>
                <div className="breakdown-inner">
                    <p>
                        The project used the <code>gym-super-mario-bros</code> 7.4.0 Python package to simulate the game environment.
                        The RL agent was trained using deep Q-learning (DQN), a model-free algorithm that optimizes actions based on
                        past rewards.
                        <br></br>
                        The agent's state was represented by the game screen's pixel data, processed through a convolutional neural network (CNN)
                        to extract features. The action space included movements like left, right, jump, and combinations thereof.
                        <br></br><br></br>
                        A key challenge was optimizing the agents hyperparameters to balance exploration and exploitation.
                        Despite adjustments, training was constrained by hardware limitations, significantly reducing the number
                        of iterations we could run. As a result, while the agent learned to navigate obstacles and progress through
                        the first level, it did not achieve full completion or high-level gameplay proficiency.
                        <br></br><br></br>
                        The model's performance was evaluated using reward tracking and visualization tools to analyze
                        action efficiency over time. Future improvements could include using more advanced RL techniques
                        like Proximal Policy Optimization (PPO) or distributed training to accelerate learning.
                    </p>
                </div>
            </div>

            <div className="project-list">
                <h2>Experience Gained</h2>
                <ul className="experience">
                    {experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SuperAIBrosProject;