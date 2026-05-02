import React from 'react';

function HobbiesSection() {
    const myHobbies = [
        { name: "Sim Racing", attrs: "(iRacing)" },
        { name: "Flight Simulation", attrs: "(Microsoft Flight Simulator, DCS World)" },
        { name: "Music Production", attrs: "(Ableton Live)" },
        { name: "Guitar", attrs: "(Electric, Acoustic)" },
        { name: "3D Modeling", attrs: "(Blender)" }
    ];

    return (
        <>
            <h3>Hobbies</h3>
            <ul className="bulletlist">
                {myHobbies.map((hobby, index) => (
                    <li key={index}>
                        {hobby.name}
                        <span className="hobbyattributes"> {hobby.attrs}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default HobbiesSection;