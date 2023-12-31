import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DrumMachine from "./components/DrumMachine";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import Human from "./components/Human";
import Calculator from "./components/Calculator";

const root = document.getElementById('root') || document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// import all audio files dynamically TODO:{FIx dynamic importation of audio resources}
// const context = require.context('./', false, /\.(mp3|ogg|wav)$/);
//
// const audioFiles = {};
// context.keys().forEach((filename) => {
//     const key = filename.replace('./', '').replace(/\.(mp3|ogg|wav)$/, '');
//     audioFiles[key] = context(filename).default;
// });
//
// export default audioFiles;

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <DrumMachine/>
        </DevSupport>
    </React.StrictMode>
);

