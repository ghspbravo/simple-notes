import React, { Component } from 'react';
import NoteEdit from './NoteEdit';
import Button from './Button';

export default class Note extends Component {

    constructor(props) {
        super(props)
        this.state = { note: this.props.note, hovered: false, editing: false }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.switchHover = this.switchHover.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleEdit() {
        this.setState({ editing: true })
    }

    handleSave(e) {
        this.setState({ 
            editing: false,
        });
    }

    handleTitleChange(e) {
        this.setState({note: {title: e.target.value, text: this.state.note.text}})
    }

    handleTextChange(e) {
        this.setState({note: {text: e.target.value, title: this.state.note.title}})
    }

    renderForm() {
        return (
            <div>
                <NoteEdit
                    note={this.state.note}
                    handleSave={this.handleSave}
                    handleTitleChange={this.handleTitleChange}
                    handleTextChange={this.handleTextChange} />
            </div>
        )
    }

    switchHover() {
        this.setState({ hovered: !this.state.hovered })
    }

    renderNote() {

        return (
            <div key={this.state.note.id} onMouseEnter={this.switchHover} onMouseLeave={this.switchHover} className="note">
                <h2>{this.state.note.title}</h2>
                <div>{this.state.note.text}</div>
                {this.state.hovered
                    ? <div><Button
                        handleClickEvent={this.handleEdit}>Edit</Button>
                        <Button>Delete</Button></div>
                    : <div></div>
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.editing
                        ? this.renderForm()
                        : this.renderNote()
                }
            </div>
        )
    }
};
