
// const { log } = require('console');
const http = require('http');

const createHtml = `<html><head><title>Form.</title></head>`;
const createInput = `<body><form method="post" action ="/process"><input name ="message"/></form></body></html>`;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(createHtml);
        res.write(createInput);
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        req.on('data', chunk => console.log(chunk.toString()))
        res.write('This is Bidhan deb nath...');
        res.write('Web Developer');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found!');
        res.end();
    }
});

server.listen(8000);
console.log(new Date() + "Server is running at http://127.0.0.1:8000");












// const file = require('fs');

// const readStream = file.createReadStream(`${__dirname}/informations.txt`);

// readStream.on('data', chunk => console.log(chunk.toString()));