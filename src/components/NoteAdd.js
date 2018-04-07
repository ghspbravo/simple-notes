import React, { Component } from 'react';
import addImage from '../res/add.png';
import Note from './Note';

const addNoteStyle = {
    textAlign: 'center',
    backgroundImage: `url(${addImage})`,
    backgroundSize: '30%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '0.1em solid gray',
}

export default class NoteAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            added: false,
        };
    };

    addNoteSwitch = () => {
        this.setState({added: !this.state.added})
    }

    addNoteHandler = (title, text) => {
        this.props.addNoteHandler(title, text);
        this.addNoteSwitch();
    }

    renderAddBlock() {
        return (<div onClick={this.addNoteSwitch} className="note clickable" style={addNoteStyle}>
            <span style={{ display: 'block', marginTop: '2.5em', color: 'gray', }}>you can add note here</span>
        </div>)
    }

    renderNoteBlock() {
        return (
            <Note addNoteHandler={this.addNoteHandler}/>
        )
    }

    render() {
        return (
            <div>
            {
                this.state.added
                ? this.renderNoteBlock()
                : this.renderAddBlock()
            }
            </div>
        )
    }
};
