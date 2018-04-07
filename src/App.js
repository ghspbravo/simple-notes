import React, { Component } from 'react';
import './App.css';
import serverData from './fakeServer.js';
import Note from './components/Note.js';
import NoteAdd from './components/NoteAdd';

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
    changeNoteHandler = (i, title, text) => {
        let data = this.state.fakeServer.user.notes
        data[i] = {
            title: title,
            text: text,
        }
        this.setState({fakeServer: {user: {notes: data, name: this.state.fakeServer.user.name}}})
    }
    deleteNoteHandler = (i) => {
        let data = this.state.fakeServer.user.notes
        data.splice(i, 1);
        this.setState({fakeServer: {user: {notes: data, name: this.state.fakeServer.user.name}}})
    }
    addNoteHandler = (title, text) => {
        let data = this.state.fakeServer.user.notes
        data.push({
            title: title,
            text: text,
        })
        this.setState({fakeServer: {user: {notes: data, name: this.state.fakeServer.user.name}}})
    }
    render() {
        return (
            <div>
                {this.state.fakeServer.user ?
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Welcome, {this.state.fakeServer.user.name}, here're your notes!</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '2em', marginRight: '2em' }}>
                            {
                                this.state.fakeServer.user.notes.map(
                                    (note, i) => <Note key={i} index={i} 
                                    deleteNoteHandler={this.deleteNoteHandler}
                                    changeNoteHandler={this.changeNoteHandler} 
                                    addNoteHandler={this.addNoteHandler}
                                    note={note}/>)
                            }
                            <NoteAdd addNoteHandler={this.addNoteHandler}/>
                        </div>
                    </div> : <h1 style={{ position: 'absolute', top: '48%', left: '45%', }}>Loading...</h1>
                }
            </div>
        )
    }
}

export default App;
