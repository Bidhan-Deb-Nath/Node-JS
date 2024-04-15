
const people = require('./index');
const os = require('os');
const fileSystem = require('fs');
const output = data => console.log(data);
const text = 'let a = 5 ; let b = 6;';
fileSystem.writeFileSync('indexs.js', text);
const readFile = fileSystem.readFileSync('indexs.js');
output(readFile.toLocaleString())
const path = require('path');
const { log } = require('console');
const myPath = path.basename('/media/bidhan/Programming Files/Node JS/test02/index.js');


people.forEach(element => {
    console.log(element)
});

console.log(`1. The script is running from ${myPath}`);
console.log(`2. The script is running from ${os.platform()}`);
console.log(`3. The script is running from ${os.freemem()}`);
console.log(`s. The script is running from ${os.cpus()}`);

