import React from 'react';
import './App.css';
import noteImage from './res/sticky-note.png';
import addImage from './res/add.png';

const noteSize = {
    width: '250px',
    height: '250px',
}


const noteStyle = {
    display: 'block',
    backgroundImage: `url(${noteImage})`,
    backgroundSize: 'cover',
    marginRight: '1.5em',
    marginBottom: '2em',
    ...noteSize,
}

const addNoteStyle = {
    display: 'block',
    backgroundImage: `url(${addImage})`,
    backgroundSize: '30%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '0.1em solid gray',
    ...noteSize,
    marginBottom: '2em'
}

const inputStyle = {
    padding: '0.5em 1em',
    margin: '0.1em 0',
    backgroundColor: 'rgba(255,255,255,0.3)',
    border: '0.1em solid gray'
}

const App = props => (
    <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Simple notes!</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '2em', marginRight: '2em' }}>
            {Notes()}
            {NoteEdit()}
            {NoteAdd()}
        </div>
    </div>
)

const Notes = param => (
    <div style={noteStyle}>
        <h2>param.title</h2>
        <div>param.text</div>
    </div>
)

const NoteAdd = params => (
    <div style={addNoteStyle}>
        <span style={{display: 'block', marginTop: '2.5em', color: 'gray',}}>you can add note here</span>
    </div>
)

const NoteEdit = params => (
    <div style={noteStyle}>
        <h2><input style={inputStyle} type="text" placeholder="title"/></h2>
        <div><textarea style={inputStyle} type="text" placeholder="text"/></div>
    </div>
)

export default App;
