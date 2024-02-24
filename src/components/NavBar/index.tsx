// src/components/Navbar/index.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {useAudio} from "../../contexts/AudioContext";

const Navbar: React.FC = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { isPlaying, togglePlay } = useAudio();

    // Function to handle link clicks
    const handleNavLinkClick = () => {
        setIsNavExpanded(false); // This will close the navbar on link click
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" onClick={handleNavLinkClick}>MagesGate</Link>
            </div>
            <button
                className={styles.hamburger}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                aria-label="Toggle navigation"
            >
                &#9776;
            </button>
            <ul className={`${styles.navLinks} ${isNavExpanded ? styles.show : ""}`}>
                <li><Link to="/about-us" onClick={handleNavLinkClick}>About Us</Link></li>
                <li><Link to="/teamspeak" onClick={handleNavLinkClick}>TeamSpeak</Link></li>
                <li>
                    <button
                        onClick={togglePlay}
                        className={styles.audioControl}>
                <span className={styles.icon}>
                    {isPlaying ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-play"></i>}
                </span>
                        <span className={styles.text}>
                    {isPlaying ? 'Mute Audio' : 'Play Audio'}
                </span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
