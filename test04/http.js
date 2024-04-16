const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hi  there! Welcome to the home page!');
        response.write(new Date());
        response.end();
    } else if (request.url === '/about') {
        response.write('Hi Bidhan!');
        response.write('Web Developer');
        response.end();
    } else {
        response.write('Not Found!');
        response.end();
    }
});

server.listen(3000);

console.log('Server is runing : 5000!');