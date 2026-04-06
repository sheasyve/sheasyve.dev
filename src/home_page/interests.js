import React from 'react';

function InterestsSection() {
    const myInterests = [
        "Backend Development",
        "Computer Graphics",
        "Computer Simulations",
        "Frontend Development",
        "Machine Learning",
        "Database Structures",
    ];

    return (
        <div className="list">
            <h3>Professional Interests</h3>
            <ul className="bulletlist">
                {myInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
}

export default InterestsSection;