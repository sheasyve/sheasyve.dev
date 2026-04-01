import React from 'react';

function InterestsSection() {
    const myInterests = [
        "Data Structures & Algorithms",
        "Computer Graphics",
        "Machine Learning",
        "Simulations",
        "Artificial Intelligence",
        "Competitive Programming",
        "Relational Databases",
        "Computer Security"
    ];

    return (
        <div className="list">
            <h3>Interests</h3>
            <ul className="bulletlist">
                {myInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
}

export default InterestsSection;