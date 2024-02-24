import React from 'react';
import styles from './styles.module.css';
import { icons } from './icons';
import {spells_sound} from "./sounds"; // Assuming this is your array of icon imports

const IconGrid: React.FC = () => {
    const handleMouseDown = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const target = event.currentTarget;
        target.classList.add(styles.clicked); // Add 'clicked' class
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const target = event.currentTarget;
        target.classList.remove(styles.clicked); // Remove 'clicked' class
    };

    const handleIconClick = (index: number) => {
        // Function to play the audio
        const audio = new Audio(spells_sound[index]);
        audio.play();
    };

    return (
        <div className={styles.iconGrid}>
            {icons.map((icon, index) => (
                <div key={index} className={styles.iconCell} onClick={() => handleIconClick(index)}>
                    <img
                        src={icon}
                        alt={`Icon ${index + 1}`}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp} // Handle case where mouse is moved away while pressed
                    />
                </div>
            ))}
        </div>
    );
};

export default IconGrid;
