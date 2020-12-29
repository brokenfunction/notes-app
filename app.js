const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
const validator = require('validator');
const msg = chalk.blue.inverse.bold('Success');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => { console.log('Adding new note..'); }
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

console.log(yargs.argv);




/*console.log(msg);
console.log(process.argv);
*/

