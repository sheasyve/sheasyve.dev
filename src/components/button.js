import React from 'react';
import { motion } from 'framer-motion';

function MyButton() {
    const handleClick = () => {
        alert("Thanks for clicking this button. It represents the end of the page.");
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
                
            <button id="theButton" onClick={handleClick}>
                <span className="italic">Thanks.</span>
            </button>
        </motion.div>
    );
}

export default MyButton;