import React, { Component } from 'react';
import './App.css';
import {noteStyle, addNoteStyle, inputStyle} from './styles.js'
import serverData from './fakeServer.js';

class App extends Component {
    constructor() {
        super()
        this.state = { fakeServer: {} }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ fakeServer: serverData });
        }, 2000);
    }
    render() {
        return (
            <div>
                {this.state.fakeServer.user ?
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Welcome, {this.state.fakeServer.user.name}, here're your notes!</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '2em', marginRight: '2em' }}>
                            {
                                this.state.fakeServer.user.notes.map(note => Note({title: note.title, text: note.text}))
                            }
                            {NoteEdit()}
                            {NoteAdd()}
                        </div>
                    </div> : <h1 style={{ position: 'absolute', top: '48%', left: '45%', }}>Loading...</h1>
                }
            </div>
        )
    }
}

const Note = param => (
    <div className="note" style={noteStyle}>
        <h2>{param.title}</h2>
        <div>{param.text}</div>
    </div>
)

const NoteAdd = params => (
    <div className="note clickable" style={addNoteStyle}>
        <span style={{ display: 'block', marginTop: '2.5em', color: 'gray', }}>you can add note here</span>
    </div>
)

const NoteEdit = params => (
    <div className="note" style={noteStyle}>
        <h2><input style={inputStyle} type="text" placeholder="title" /></h2>
        <div><textarea style={inputStyle} type="text" placeholder="text" /></div>
    </div>
)

export default App;
