import React from 'react';

function MyButton() {
    const handleClick = () => {
        alert("Thanks for clicking this button. It represents the end of the page.");
    };

    return (
        <button id="theButton" onClick={handleClick}>
            <span className="italic">Thanks.</span>
        </button>
    );
}

export default MyButton;