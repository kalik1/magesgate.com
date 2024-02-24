// src/components/AboutUs/index.jsx
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

import mage1 from '../../assets/images/mages/mage_1.png';
import mage2 from '../../assets/images/mages/mage_2.png';
import mage3 from '../../assets/images/mages/mage_3.png';
import mage4 from '../../assets/images/mages/mage_4.png';


const bubbleDescriptions = [
    'This mage combines unmatched intelligence with the heart of a creator, weaving spells and enchantments that baffle even the most scholarly minds in the realm. His cleverness is not just in the complexity of his creations but in their elegant simplicity, proving time and again that true brilliance lies in making the intricate feel effortless.',
    'At a leading university, this mage studied engineering, blending rigorous analysis with arcane arts. His academic journey, marked by a steadfast resolve, shaped his approach to magic: questioning, precise, and always seeking to understand the underlying mechanics. This fusion of engineering principles and magical talent makes him a unique and respected.',
    'This mage embodies the spirit of a hippie, embracing the natural flow of magic with a laid-back attitude and a deep connection to the earth. His magic is as free-spirited as he is, often unpredictable but surprisingly effective, reflecting his belief that magic, like life, thrives on freedom and peace.',
    'Creativity flows through this lady like a river, though her absent-mindedness often leads her down paths of unexpected discovery. Her magic is a wild, vivid tapestry of innovation and imagination, bringing to life spells and potions that dazzle and bewilder. In her absent-mindedness, she finds a freedom that fuels her life.'
];


const AboutUs = () => {
    const [modalContent, setModalContent] = useState({ isVisible: false, description: '' });
    const containerRef = useRef<HTMLDivElement>(null); // Specify the type for the ref
    const mages_images = [mage1, mage2, mage3, mage4];

    useEffect(() => {
        // Ensure containerRef.current is not null before proceeding
        if (containerRef.current) {
            const container = containerRef.current;
            const moveBubbles = () => {
                const bubbles = container.querySelectorAll(`.${styles.bubble}`);

                bubbles.forEach(bubble => {
                    // Initial random positions within container boundaries
                    const x = Math.random() * (container.offsetWidth - bubble.clientWidth);
                    const y = Math.random() * (container.offsetHeight - bubble.clientHeight);

                    bubble.setAttribute('style', `left: ${x}px; top: ${y}px;`);
                });
            };


            // Call the function to position bubbles
            moveBubbles();
            setInterval(() => moveBubbles(), 6000);

            // Adding event listeners to bubbles for opening the modal
            const bubbles = container.querySelectorAll(`.${styles.bubble}`);
            bubbles.forEach((bubble, index) => {
                bubble.addEventListener('click', () => setModalContent({ isVisible: true, description: bubbleDescriptions[3 - index] }));
            });

            const handleClose = () => {
                // Start by setting isVisible to false to initiate any hide animations
                setModalContent(prev => ({ ...prev, isVisible: false }));

                // Wait 1 second before changing z-index to -1, to ensure any transitions complete
                setTimeout(() => {
                    setModalContent(prev => ({ ...prev, shouldHide: true }));
                }, 1000);
            };


            // Cleanup to remove event listeners
            return () => {
                bubbles.forEach((bubble, index) => {
                    bubble.removeEventListener('click', () => setModalContent({ isVisible: true, description: bubbleDescriptions[3 - index] }));
                });
            };
        }
    }, []);

    return (
        <div ref={containerRef} className={styles.container}>
            {[...Array(4)].map((_, index) => (
                <div key={index} className={styles.bubble} onClick={() => setModalContent({ isVisible: true, description: bubbleDescriptions[3 - index] })}>
                    <span className={styles.bubbleText}>Click me...</span>
                    <img alt='' className={styles.bubbleImg} src={mages_images[3 - index]}/>
                </div>
            ))}

            <div className={`${styles.modal} ${modalContent.isVisible ? styles.show : ''}`}>
                <div className={styles.modalText}>
                    <p>{modalContent.description}</p>
                    <button onClick={() => setModalContent({ isVisible: false, description: '' })}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
