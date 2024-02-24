// src/components/AudioHandler.tsx
import React, { useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';

export const AudioHandler: React.FC = () => {
    const { autoPlay } = useAudio();

    useEffect(() => {
        const handleFirstUserInteraction = () => {
            autoPlay();
            document.removeEventListener('click', handleFirstUserInteraction);
            document.removeEventListener('keydown', handleFirstUserInteraction);
            document.removeEventListener('touchstart', handleFirstUserInteraction);
        };

        document.addEventListener('click', handleFirstUserInteraction);
        document.addEventListener('keydown', handleFirstUserInteraction);
        document.addEventListener('touchstart', handleFirstUserInteraction);

        return () => {
            document.removeEventListener('click', handleFirstUserInteraction);
            document.removeEventListener('keydown', handleFirstUserInteraction);
            document.removeEventListener('touchstart', handleFirstUserInteraction);
        };
    }, [autoPlay]);

    return null; // This component does not render anything
};
