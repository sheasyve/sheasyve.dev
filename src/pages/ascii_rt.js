import React from 'react';
import carAndTeapotVid from '../media/projects/ascii_rt/car_and_teapot.webm';
import sixtyFpsCarVid from '../media/projects/ascii_rt/60fps_car.mp4';
import carAnimationVid from '../media/projects/ascii_rt/car_animation.webm';
import LoadVideo from '../components/load-video.js';
import cpng from '../media/cuda.png';

function AsciiRTProject() {
    const techstack = [
        { icon: <i className="devicon-cplusplus-plain"></i>, name: " C++" },
        { icon: <img src={cpng} alt="CUDA" style={{ width: "15px" }} />, name: " CUDA" },
        { icon: <i className="devicon-docker-plain"></i>, name: " Docker" },
    ];

    const experience = ["Developing a real-time ray tracer from scratch, optimizing for both performance and accuracy.",
        "Implementing efficient ASCII-based rendering techniques for terminal output.",
        "Utilizing CUDA for massive parallelization, achieving a 900x speedup over CPU-based implementations.",
        "Optimizing GPU memory usage and kernel execution with Nvidia Nsight.",
        "Constructing a Bounding Volume Hierarchy (BVH) for fast ray-object intersection tests.",
        "Handling reflections, shadows, and perspective projection to enhance realism in ASCII-rendered scenes.",
        "Fine-tuning text-based animations to achieve live rendering."
    ];

    return (
        <div className="project-page">

            <div className="project-header">
                <a href="https://github.com/sheasyve/asciiRT">
                    <h1>
                        <b>AsciiRT - Real-time ray-traced animations in the terminal.</b>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo" />
                    </h1>
                </a>

                <ul className="techstack">
                    {techstack.map((tech, index) => (
                        <li key={index} className="tech-item">
                            <h4>{tech.name}</h4>
                            {tech.icon}
                        </li>
                    ))}
                </ul>
                <h3>
                    AsciiRT is a highly optimized GPU ray-tracing engine leveraging CUDA to render object models in ASCII characters.
                    Extensive optimizations resulted in a 900x speedup over the initial multi-core version, enabling real-time 60 FPS animations.
                </h3>
            </div>


            <div className="showcase">
                <LoadVideo src={carAndTeapotVid} autoPlay loop muted />
                <h3>
                    The demo below showcases a Toyota Mark II rendered in ASCII at 60 FPS, achieving a frame time of 0.01665 seconds.
                    The model consists of 18.3 thousand triangles and 11.2 thousand vertices.
                </h3>
                <LoadVideo src={sixtyFpsCarVid} autoPlay loop muted />
                <h3 style = {{marginBottom: "0"}}>
                    Users can load multiple object files (.obj), render still images or animations, and apply transformations
                    such as translation and rotation. The ray-tracing kernel processes the scene, mapping brightness values to ASCII
                    characters for terminal-based rendering. With optimized parallelism, animations maintain smooth 60 FPS output.
                </h3>
            </div>

            <div className="technical-breakdown">
                <h2>Technical Breakdown</h2>

                <p>
                    Each object model, a collection of connected points in space, is transformed, ray-traced, and converted to ASCII in real-time.
                    The engine simulates realistic lighting using reflections, shadows, and perspective projection, with four light sources.
                    <br></br> <br></br>
                    The ray-tracing engine casts a ray for every pixel from the camera's point of view each frame.
                    When a ray collides with an object, lighting calculations determine pixel brightness, which is then mapped to ASCII characters.
                    <br></br> <br></br>
                    A Bounding Volume Hierarchy (BVH) accelerates ray-object intersection tests, minimizing computational overhead.
                    The GPU assigns each ray to a separate thread, maximizing parallel execution for real-time performance.
                </p>

                <LoadVideo src={carAnimationVid} autoPlay loop muted />
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

export default AsciiRTProject;