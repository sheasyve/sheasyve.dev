import React from 'react';

import frontCarVid from '../media/projects/birdflow/Front car.mp4';
import sideCarVid from '../media/projects/birdflow/Side Car.mp4';
import backCarVid from '../media/projects/birdflow/Back car.mp4';
import sphereVid from '../media/projects/birdflow/Sphere.mp4';
import blockVid from '../media/projects/birdflow/block.mp4';
import initialVid from '../media/projects/birdflow/Initial.mp4';
import movingGridVid from '../media/projects/birdflow/Moving grid.mp4';
import LoadVideo from '../components/load-video.js';

function BirdFlowProject() {
    return (
        <div className="project-page">
            <div className="Overview">
                <a href="https://github.com/sheasyve/BirdFlow">
                    <h1>
                        <b>BirdFlow - Wind Simulator Extension for Blender</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo" />
                    </h1>
                </a>
                <h3>
                    Birdflow is a tool for generating wind simulations in Blender, built with Python and Cython.
                    The extension can be used to generate realistic looking particle based visualizations of air on an object.
                </h3>
                <LoadVideo src={frontCarVid} autoPlay loop muted />
                <h4>Car From Side Angle - Shows Simulation Space</h4>
                <div className="square-video">
                    <LoadVideo src={sideCarVid} autoPlay loop muted />
                </div>
                <h3>
                    Realistic air movement beyond naive collision can be observed, as particles avoid high pressure areas
                    and gravitate towards low pressure areas. Collisions are convincing with dynamic velocity damping
                    and redirection, with tangential friction being applied.
                </h3>
                <h4>Car - Rear View</h4>
                <LoadVideo src={backCarVid} autoPlay loop muted />
            </div>

            <div className="Technical Breakdown">
                <h2>Technical Breakdown</h2>
                <h3>
                    The engine uses a Eulerian grid with a Conjugate Gradient solver to simulate incompressible flow
                    by solving the Navier-Stokes equations. Visuals are rendered using particles, for a simple way to
                    display the behavior of the airflow. This involved using Lagrangian methods for particle collisions
                    and movement, making the simulation a hybrid approach having both Eulerian and Lagrangian aspects.
                </h3>
                <h3>
                    The particles are first advected with a Runge-Kutta 3rd order method, and then pressure in the
                    simulation is calculated using the conjugate gradient solver from SciPy. Pressure changes are
                    distributed through the grid, and particle velocities are updated accordingly after checking for collisions.
                </h3>
                <h4>Sphere</h4>
                <LoadVideo src={sphereVid} autoPlay loop muted />
                <h3>
                    The pressure from the grid does help particles avoid collisions naturally to some extent, as particles
                    don’t want to be in high pressure areas. However, particles can still collide with the object, which is why
                    lagrangian collision handling was implemented. This means that when a collision is detected,
                    the particle is redirected along the tangent of the object, and slowed down with collision and friction force.
                </h3>
                <h4>Tilted Block</h4>
                <LoadVideo src={blockVid} autoPlay loop muted />
            </div>

            <div className="experience">
                <h2>Experience Gained</h2>
                <ul className="bulletlist">
                    <li>Optimizing Python using Cython for improved performance in computationally heavy tasks.</li>
                    <li>Integrating external APIs efficiently to extend Blender's functionality.</li>
                    <li>Gaining a deeper understanding of fluid dynamics and numerical methods, particularly the Navier-Stokes equations.</li>
                    <li>Developing a hybrid Eulerian-Lagrangian simulation approach for more realistic airflow visualization.</li>
                    <li>Fine-tuning particle behavior through velocity damping, friction forces, and pressure-based redirection.</li>
                    <li>Iterating through multiple failed attempts, learning from each to refine simulation accuracy and stability.</li>
                </ul>
            </div>

            <div className="Previous Attempts">
                <h2>Failed Attempts Along the Way</h2>
                <h4>Initial Attempt with Lagrangian Physics - No Pressure Calculations</h4>
                <LoadVideo src={initialVid} autoPlay loop muted />
                <h4>Initial Eulerian Attempt - Advected the Grid Itself Opposed to Grid Velocities</h4>
                <div className="square-video" style={{ aspectRatio: "16/12" }}><LoadVideo src={movingGridVid} autoPlay loop muted />
                </div>
            </div>
        </div>
    );
}

export default BirdFlowProject;