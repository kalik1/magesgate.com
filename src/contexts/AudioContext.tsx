// src/contexts/AudioContext.tsx
import React, { createContext, useContext, useState, ReactNode, FunctionComponent } from 'react';
import {music} from "./sounds";

type AudioContextType = {
    isPlaying: boolean;
    hasBeenInitiated: boolean; // New state to track if audio has been initiated
    togglePlay: () => void;
    autoPlay: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};

interface AudioProviderProps {
    children: ReactNode;
}

export const AudioProvider: FunctionComponent<AudioProviderProps> = ({ children }) => {
    const [audio] = useState(() => {
        const audio = new Audio(music.pirate);
        audio.volume = 0.1;
        return audio;
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasBeenInitiated, setHasBeenInitiated] = useState(false);

    const autoPlay = () => {
        if (!hasBeenInitiated) {
            setHasBeenInitiated(true);
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    // Remove event listeners if needed, or set a flag to not autoplay again
                })
                .catch(error => {
                    console.log("Auto-play was prevented by the browser.", error);
                    // Auto-play was prevented, consider showing a UI element to encourage user interaction
                });
        }
    };

    const togglePlay = () => {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log("Auto-play was prevented by the browser.", error);
            });
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <AudioContext.Provider value={{ isPlaying, hasBeenInitiated, togglePlay, autoPlay }}>
            {children}
        </AudioContext.Provider>
    );
};
