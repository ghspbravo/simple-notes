import React from 'react';
import addImage from '../res/add.png';

const addNoteStyle = {
    textAlign: 'center',
    backgroundImage: `url(${addImage})`,
    backgroundSize: '30%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '0.1em solid gray',
}

export const NoteAdd = params => (
    <div className="note clickable" style={addNoteStyle}>
        <span style={{ display: 'block', marginTop: '2.5em', color: 'gray', }}>you can add note here</span>
    </div>
)

export default NoteAdd;
