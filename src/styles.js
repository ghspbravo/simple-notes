import noteImage from './res/sticky-note.png';
import addImage from './res/add.png';

export const noteStyle = {
    display: 'block',
    backgroundImage: `url(${noteImage})`,
    backgroundSize: 'cover',
}

export const addNoteStyle = {
    textAlign: 'center',
    backgroundImage: `url(${addImage})`,
    backgroundSize: '30%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '0.1em solid gray',
}

export const inputStyle = {
    width: '100%',
    padding: '0.5em 1em',
    margin: '0.1em 0',
    backgroundColor: 'rgba(255,255,255,0.3)',
    border: '0.1em solid gray',
    boxSizing: 'border-box'
}