import React, { useState, useEffect } from 'react';
import '../styles/DrumMachine.css'; // Adjust the path based on your actual file structure
import song1 from "../assets/Heater-1.mp3";
import song2 from "../assets/Heater-2.mp3";
import song3 from "../assets/Heater-3.mp3";
import song4 from "../assets/Heater-4.mp3";
import song5 from "../assets/Kick_n_Hat.mp3";
import song6 from "../assets/Open-HH.mp3";
import song7 from "../assets/RP4_KICK_1.mp3";
import song8 from "../assets/Clap.mp3";
import song9 from "../assets/Closed-HH.mp3";

const DrumMachine = () => {
    const [displayText, setDisplayText] = useState('');

    const drumPads = [
        { id: 'Q', text: 'Kick', audioPath: song1 },
        { id: 'W', text: 'Snare', audioPath: song2 },
        { id: 'E', text: 'Hi-Hat', audioPath: song3 },
        { id: 'A', text: 'Tom 1', audioPath: song4 },
        { id: 'S', text: 'Tom 2', audioPath: song5},
        { id: 'D', text: 'Tom 3', audioPath: song6 },
        { id: 'Z', text: 'Clap', audioPath: song7 },
        { id: 'X', text: 'Crash', audioPath: song8 },
        { id: 'C', text: 'Ride', audioPath: song9 },
    ];

    const handlePadClick = (audioId, displayText) => {
        const audioElement = document.getElementById(audioId).querySelector('audio');
        audioElement.currentTime = 0;
        audioElement.play().then(r => console.log("error with source"));
        setDisplayText(displayText);
    };

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        const drumPad = document.getElementById(key);

        if (drumPad) {
            const audioId = drumPad.getAttribute('id');
            const displayText = drumPad.getAttribute('data-text');
            handlePadClick(audioId, displayText);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="drum-machine">
            <div id="display">{displayText}</div>
            <div className="drum-pad-container">
                {drumPads.map((pad) => (
                    <div
                        key={pad.id}
                        className="drum-pad"
                        id={pad.id}
                        data-text={pad.text}
                        onClick={() => handlePadClick(pad.id, pad.text)}
                    >
                        {pad.id}
                        <audio className="clip" id={pad.id}>
                            <source src={pad.audioPath} />
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DrumMachine;