import React, { Component } from 'react';
import NoteEdit from './NoteEdit';
import Button from './Button';

export default class Note extends Component {

    constructor(props) {
        super(props)
        this.state = { hovered: false, editing: false }
        this.renderForm = this.renderForm.bind(this)
        this.switchHover = this.switchHover.bind(this)
    }

    handleEdit = () => {
        this.setState({ editing: true })
    }

    handleSave = (title, text) => {
        this.props.index !== undefined 
        ? this.props.changeNoteHandler(this.props.index, title, text)
        : this.props.addNoteHandler(title, text)
        this.setState({ editing: false, });
    }

    handleDelete = () => {
        this.props.deleteNoteHandler(this.props.index);
    }

    renderForm() {
        return (
            <div>
                <NoteEdit
                    note={this.props.note}
                    handleSave={this.handleSave} />
            </div>
        )
    }

    switchHover() {
        this.setState({ hovered: true })
    }

    hideHover = () => {
        this.setState({ hovered: false })
    }

    renderNote() {
        return (
            <div onMouseEnter={this.switchHover} onMouseLeave={this.hideHover} className="note">
                <h2>{this.props.note.title}</h2>
                <div>{this.props.note.text}</div>
                {this.state.hovered
                    ? <div><Button
                        handleClickEvent={this.handleEdit}>Edit</Button>
                        <Button
                        handleClickEvent={this.handleDelete}>Delete</Button></div>
                    : <div></div>
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.note && !this.state.editing
                        ? this.renderNote()
                        : this.renderForm()
                }
            </div>
        )
    }
};
