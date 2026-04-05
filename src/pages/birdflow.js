import React from 'react';

import frontCarVid from '../media/projects/birdflow/Front car.mp4';
import sideCarVid from '../media/projects/birdflow/Side Car.mp4';
import backCarVid from '../media/projects/birdflow/Back car.mp4';
import sphereVid from '../media/projects/birdflow/Sphere.mp4';
import blockVid from '../media/projects/birdflow/block.mp4';
import initialVid from '../media/projects/birdflow/Initial.mp4';
import movingGridVid from '../media/projects/birdflow/Moving grid.mp4';

function BirdFlowProject() {
    return (
        <div className="info">
            <div className="Overview">
                <a href="https://github.com/sheasyve/BirdFlow">
                    <h1>
                        <b>BirdFlow - Wind Simulator Extension for Blender</b>
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                        />
                    </h1>
                </a>
                <h3>
                    Birdflow is a tool for generating wind simulations in Blender, built with Python and Cython. 
                    The extension can be used to generate realistic looking particle based visualizations of air on an object.
                </h3>
                <video autoPlay loop muted>
                    <source src={frontCarVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h4>Car From Side Angle - Shows Simulation Space</h4>
                <video autoPlay loop muted>
                    <source src={sideCarVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h3>
                    Realistic air movement beyond naive collision can be observed, as particles avoid high pressure areas 
                    and gravitate towards low pressure areas. Collisions are convincing with dynamic velocity damping 
                    and redirection, with tangential friction being applied.
                </h3>
                <h4>Car - Rear View</h4>
                <video autoPlay loop muted>
                    <source src={backCarVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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
                <video autoPlay loop muted>
                    <source src={sphereVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h3>
                    The pressure from the grid does help particles avoid collisions naturally to some extent, as particles 
                    don’t want to be in high pressure areas. However, particles can still collide with the object, which is why
                    lagrangian collision handling was implemented. This means that when a collision is detected, 
                    the particle is redirected along the tangent of the object, and slowed down with collision and friction force.
                </h3>
                <h4>Tilted Block</h4>
                <video autoPlay loop muted>
                    <source src={blockVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> 

            <div className="Experience Gained">
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
                <video autoPlay loop muted>
                    <source src={initialVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h4>Initial Eulerian Attempt - Advected the Grid Itself Opposed to Grid Velocities</h4>
                <video autoPlay loop muted>
                    <source src={movingGridVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default BirdFlowProject;