import React, { Component } from 'react';
import './App.css';
import serverData from './fakeServer.js';
import Note from './components/Note.js';
import NoteAdd from './components/NoteAdd';
import NoteEdit from './components/NoteEdit';

class App extends Component {
    constructor() {
        super()
        this.state = { fakeServer: {} }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ fakeServer: serverData });
        }, 500);
    }
    render() {
        return (
            <div>
                {this.state.fakeServer.user ?
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Welcome, {this.state.fakeServer.user.name}, here're your notes!</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '2em', marginRight: '2em' }}>
                            {
                                this.state.fakeServer.user.notes.map(note => <Note note={note}/>)
                            }
                            <NoteEdit/>
                            {NoteAdd()}
                        </div>
                    </div> : <h1 style={{ position: 'absolute', top: '48%', left: '45%', }}>Loading...</h1>
                }
            </div>
        )
    }
}

export default App;
