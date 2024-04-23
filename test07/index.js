
// const { log } = require('console');
const fileSystem = require('fs');
// Function to write data to a text file
const readStreamFile = fileSystem.createReadStream(`${__dirname}/informations.txt`);
const writeStreamFile = fileSystem.createWriteStream(`${__dirname}/readFile.txt`);


readStreamFile.on('data', chunk => writeStreamFile.write(chunk));

// readStreamFile.pipe(writeStreamFile);














// const file = require('fs');

// const readStream = file.createReadStream(`${__dirname}/informations.txt`);

// readStream.on('data', chunk => console.log(chunk.toString()));