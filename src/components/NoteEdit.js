import React from 'react';

const inputStyle = {
    width: '100%',
    padding: '0.5em 1em',
    margin: '0.1em 0',
    backgroundColor: 'rgba(255,255,255,0.3)',
    border: '0.1em solid gray',
    boxSizing: 'border-box'
}

export const NoteEdit = params => (
    <div className="note">
        <h2><input style={inputStyle} type="text" placeholder="title" value=''/></h2>
        <div><textarea style={inputStyle} type="text" placeholder="text" value=''/></div>
    </div>
)

export default NoteEdit;
