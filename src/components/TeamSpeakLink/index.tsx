// src/components/TeamSpeakLink/index.tsx
import React from 'react';
import styles from './styles.module.css';

const TeamSpeakLink: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Spacer element to push content down */}
            <div style={{ flex: 1 }}></div>
            <h2>Join Our TeamSpeak Server</h2>
            <p>Connect with fellow mages and embark on your next adventure.</p>
            <a href="ts3server://ts3.magesgate.com" className={styles.joinButton}>Join Now</a>
            {/* You can adjust or remove this spacer if needed */}
            <div style={{ flex: 0.5 }}></div>
        </div>
    );
}

export default TeamSpeakLink;
