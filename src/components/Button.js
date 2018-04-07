import React from 'react';

let buttonStyle = {
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '10px 15px',
    margin: '20px 20px',
    fontSize: '1em',
}

export default (props) => {
    return (
        <button 
        onClick={props.handleClickEvent} 
        style={buttonStyle}>{props.children}</button>
    )
};
