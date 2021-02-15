const fs = require('fs');

const getNotes = () => { return 'Your notes ...' };
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter(function (note) {
        return note.title === title
    });

    if(duplicatedNotes.length) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }

}
const removeNote = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    });

    if(notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep);
        console.log('Note ' + title + ' removed');
    } else {
        console.log('Note not found');
    }
}
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote
};