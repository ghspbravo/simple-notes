import React, { Component } from 'react';

export default class Note extends Component {

    constructor() {
        super()
        this.state = { hovered: false }
    }

    render() {

        let switchHover = () => {
            this.setState({
                hovered: !this.state.hovered
            })
        }

        let hoverCaptionsStyle = {
            cursor: 'pointer'
        }

        return (
            <div>
                <div onMouseEnter={switchHover} onMouseLeave={switchHover} key={this.props.note.id} className="note">
                    <h2>{this.props.note.title}</h2>
                    <div>{this.props.note.text}</div>
                    {this.state.hovered
                        ?
                        <div>
                            <button style={hoverCaptionsStyle}>Edit</button>
                            <button style={hoverCaptionsStyle}>Delete</button>
                        </div>
                        : <div></div>
                    }
                </div>
            </div>
        )
    }
};
