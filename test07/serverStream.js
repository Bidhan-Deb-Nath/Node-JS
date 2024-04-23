const http = require('http');
const fileSystem = require('fs');

const handleRequest = (request,response) => {
    const readStreamFile = fileSystem.createReadStream(`${__dirname}/readFile.txt`);
    readStreamFile.pipe(response);
}

const createServer = http.createServer(handleRequest);
createServer.listen(7000);
console.log("Server is running at port 7000");
