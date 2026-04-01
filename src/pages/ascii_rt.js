import React from 'react';

function AsciiRTProject() {
    return (
        <div className="info">
            <div className="Overview">
                <a href="https://github.com/sheasyve/asciiRT">
                    <h1>
                        <b>AsciiRT - Real-time ray-traced animations in the terminal.</b>
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                        />
                    </h1>
                </a>
                <h3>
                    AsciiRT is a highly optimized GPU ray-tracing engine leveraging CUDA to render object models in ASCII characters.
                    Extensive optimizations resulted in a 900x speedup over the initial multi-core version, enabling real-time 60 FPS animations.
                </h3>
                <video autoPlay loop muted>
                    <source src="media/projects/ascii_rt/car_and_teapot.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <h3>
                    The demo below showcases a Toyota Mark II rendered in ASCII at 60 FPS, achieving a frame time of 0.01665 seconds.
                    The model consists of 18.3 thousand triangles and 11.2 thousand vertices.
                </h3>
                <video autoPlay loop muted>
                    <source src="media/projects/ascii_rt/60fps Car.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <h3>
                    Users can load multiple object files (.obj), render still images or animations, and apply transformations
                    such as translation and rotation. The ray-tracing kernel processes the scene, mapping brightness values to ASCII
                    characters for terminal-based rendering. With optimized parallelism, animations maintain smooth 60 FPS output.
                </h3>
            </div>

            <div className="Technical Breakdown">
                <h2>Technical Breakdown</h2>
                <h3>
                    Each object model, a collection of connected points in space, is transformed, ray-traced, and converted to ASCII in real-time.
                    The engine simulates realistic lighting using reflections, shadows, and perspective projection, with four light sources.
                </h3>
                <video autoPlay loop muted>
                    <source src="media/projects/ascii_rt/car_animation.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <h3>
                    The ray-tracing engine casts a ray for every pixel from the camera's point of view each frame.
                    When a ray collides with an object, lighting calculations determine pixel brightness, which is then mapped to ASCII characters.
                </h3>
                <h3>
                    A Bounding Volume Hierarchy (BVH) accelerates ray-object intersection tests, minimizing computational overhead.
                    The GPU assigns each ray to a separate thread, maximizing parallel execution for real-time performance.
                </h3>
            </div>

            <div className="Experience Gained">
                <h2>Experience Gained</h2>
                <ul className="bulletlist">
                    <li>Developing a real-time ray tracer from scratch, optimizing for both performance and accuracy.</li>
                    <li>Implementing efficient ASCII-based rendering techniques for terminal output.</li>
                    <li>Utilizing CUDA for massive parallelization, achieving a 900x speedup over CPU-based implementations.</li>
                    <li>Optimizing GPU memory usage and kernel execution with Nvidia Nsight.</li>
                    <li>Constructing a Bounding Volume Hierarchy (BVH) for fast ray-object intersection tests.</li>
                    <li>Handling reflections, shadows, and perspective projection to enhance realism in ASCII-rendered scenes.</li>
                    <li>Fine-tuning text-based animations to achieve live rendering.</li>
                </ul>
            </div>

        </div>
    );
}

export default AsciiRTProject;