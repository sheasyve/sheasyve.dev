import React from 'react';

function InterestsSection() {
    const myInterests = [
        "Backend Development",
        "Computer Graphics",
        "Computer Simulations",
        "Frontend Development",
        "Database Structures",
        "Machine Learning"
    ];

    return (
        <>
            <h3>Professional Interests</h3>
            <ul className="bulletlist">
                {myInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </>
    );
}

export default InterestsSection;