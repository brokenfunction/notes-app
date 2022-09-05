const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.blue.inverse('Title:'), chalk.inverse(note.title));
        console.log(chalk.blue.inverse('Body:'), chalk.inverse(note.body));
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
};
const listNotes = () => {
    const notes = loadNotes();
    if (notes.length) {
        console.log(chalk.blue.inverse('Notes list:'));
        notes.forEach(note => console.log(note.title));
    } else {
        console.log(chalk.yellow.inverse('Notes are empty'))
    }
};
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNote = notes.find(note => note.title === title);
    if (!duplicatedNote) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.yellow.inverse('Note title taken!'));
    }
}
const removeNote = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note ' + title + ' removed'));
    } else {
        console.log(chalk.red.inverse('No note found'));
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
    readNote,
    addNote,
    removeNote,
    listNotes
};