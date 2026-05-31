import React from 'react';

function InterestsSection() {
    const myInterests = [
        "Full-Stack Development",
        "Computer Graphics",
        "Computer Simulations",
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