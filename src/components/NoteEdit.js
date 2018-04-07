import React, { Component } from 'react';
import Button from './Button';

const inputStyle = {
    width: '100%',
    padding: '0.5em 1em',
    margin: '0.1em 0',
    backgroundColor: 'rgba(255,255,255,0.3)',
    border: '0.1em solid gray',
    boxSizing: 'border-box'
}

export default class NoteEdit extends Component {

    handleSave = () => {
        this.props.handleSave(this.refs.titleInput.value, this.refs.textInput.value);
    }

    render() {
        return (
            <div className="note">
                <h2><input
                    ref="titleInput"
                    style={{ ...inputStyle, fontWeight: 'bold' }}
                    type="text"
                    placeholder="title"
                    defaultValue={this.props.note && this.props.note.title} /></h2>
                <div><textarea
                    ref="textInput"
                    style={{ ...inputStyle, height: '10em' }}
                    type="text"
                    placeholder="text"
                    defaultValue={this.props.note && this.props.note.text} /></div>
                <Button handleClickEvent={this.handleSave}>Save</Button>
            </div>
        )
    }
};