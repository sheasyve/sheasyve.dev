import React from 'react';

function MyButton() {
    const handleClick = () => {
        alert("Thanks for clicking this button.");
    };

    return (
        <button id="theButton" onClick={handleClick}>
            <span className="italic">Thanks.</span>
        </button>
    );
}

export default MyButton;