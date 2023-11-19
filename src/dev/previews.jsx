import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import DrumMachine from "../components/DrumMachine";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/DrumMachine">
                <DrumMachine/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews