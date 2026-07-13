import React from 'react';

import frontCarVid from '../../media/projects/birdflow/Front car.mp4';
import sideCarVid from '../../media/projects/birdflow/Side Car.mp4';
import backCarVid from '../../media/projects/birdflow/Back car.mp4';
import sphereVid from '../../media/projects/birdflow/Sphere.mp4';
import blockVid from '../../media/projects/birdflow/block.mp4';
import initialVid from '../../media/projects/birdflow/Initial.mp4';
import movingGridVid from '../../media/projects/birdflow/Moving grid.mp4';
import LoadVideo from '../components/load-video.js';

function BirdFlowProject() {

    const techstack = [{ icon: <i className="devicon-python-plain"></i>, name: " Python" },
        { icon: <i className="devicon-cython-plain"></i>, name: " Cython" },
        { icon: <i className="devicon-blender-plain"></i>, name: " Blender API" }
    ];

    const experience = ["Optimizing Python using Cython for improved performance in computationally heavy tasks.",
        "Integrating external APIs efficiently to extend Blender's functionality.",
        "Gaining a deeper understanding of fluid dynamics and numerical methods, particularly the Navier-Stokes equations.",
        "Developing a hybrid Eulerian-Lagrangian simulation approach for more realistic airflow visualization.",
        "Fine-tuning particle behavior through velocity damping, friction forces, and pressure-based redirection.",
        "Iterating through multiple failed attempts, learning from each to refine simulation accuracy and stability."
    ];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/BirdFlow">
                    <h1>
                        <b>BirdFlow - Wind Simulator Extension for Blender</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
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
                    Birdflow is a tool for generating wind simulations in Blender, built with Python and Cython.
                    The extension can be used to generate realistic looking particle based visualizations of air on an object.
                    <br></br><br></br>
                    Realistic air movement beyond naive collision can be observed, as particles avoid high pressure areas
                    and gravitate towards low pressure areas. Collisions are convincing with dynamic velocity damping
                    and redirection, with tangential friction being applied.
                </h3>

            </div>

            <div className="birdflow-showcase">
                <div className="showcase" style={{ padding: "1rem" }}>
                    <h4 style={{ marginTop: 0 }}>Car - Front View</h4>
                    <LoadVideo src={frontCarVid} autoPlay loop muted />
                </div>

                <div className="technical-breakdown">
                    <h2>Technical Breakdown</h2>
                    <p style={{ padding: ".5rem 0vw 0vw 3vw" }}>
                        The engine uses a Eulerian grid with a Conjugate Gradient solver to simulate incompressible flow
                        by solving the Navier-Stokes equations. Visuals are rendered using particles, for a simple way to
                        display the behavior of the airflow. This involved using Lagrangian methods for particle collisions
                        and movement, making the simulation a hybrid approach having both Eulerian and Lagrangian aspects.
                    </p>

                    <p style={{ padding: ".5rem 0vw .5rem 3vw" }}>
                        The particles are first advected with a Runge-Kutta 3rd order method, and then pressure in the
                        simulation is calculated using the conjugate gradient solver from SciPy. Pressure changes are
                        distributed through the grid, and particle velocities are updated accordingly after checking for collisions.
                    </p>

                    <div className="showcase" style={{ background: "None", padding: "1rem" }}>
                        <h4>Car - Rear View</h4>
                        <LoadVideo src={backCarVid} autoPlay loop muted />
                        <h4>Sphere</h4>
                        <LoadVideo src={sphereVid} autoPlay loop muted />
                        <h3 style={{ background: "var(--showcase-background-color2)", padding: "1vw 1vw 1vw 2vw" }}>
                            The pressure from the grid does help particles avoid collisions naturally to some extent, as particles
                            don’t want to be in high pressure areas. However, particles can still collide with the object, which is why
                            lagrangian collision handling was implemented. This means that when a collision is detected,
                            the particle is redirected along the tangent of the object, and slowed down with collision and friction force.
                        </h3>
                        <h4>Tilted Block</h4>
                        <LoadVideo src={blockVid} autoPlay loop muted />
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

            <div className="previous-attempts" >
                <h2>Failed Attempts Along the Way</h2>
                <div className="showcase" style={{ background: "None", padding: "1rem" }}>

                    <h4 style={{ marginTop: 0 }}>Initial Attempt with Lagrangian Physics - No Pressure Calculations</h4>
                    <LoadVideo src={initialVid} autoPlay loop muted />
                    <h4>Initial Eulerian Attempt - Advected the Grid Itself Opposed to Grid Velocities</h4>
                    <div className="square-video" >
                        <LoadVideo src={movingGridVid} autoPlay loop muted />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BirdFlowProject;