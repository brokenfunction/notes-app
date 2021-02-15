const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => { console.log('Removing the note..'); }
});
yargs.command({
    command: 'list',
    describe: 'Listing out all note',
    handler: () => { console.log('Note1..'); }
});
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => { console.log('Reading a note'); }
});

yargs.parse();

//console.log(yargs.argv);




/*console.log(msg);
console.log(process.argv);
*/

