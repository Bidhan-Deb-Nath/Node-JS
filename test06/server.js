const http = require('http');

const createHtml = `<html><head><title>Form</title></head>`;
const createInput = `<body><form method ='post' action='/process'><input name = 'message'/></form></body></html>`
const serverFunction = (request, response)=>{
    if (request.url === '/') {
        response.write(createHtml);
        response.write(createInput);
        response.end();
    }else if(request.url === '/process' && request.method === 'POST') {
        response.write("Bidhan deb nath. \n");
        response.write("Web developer.");
        response.end();
    } else{
    //  response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write(`404 Not found! \n`);
        response.end();
    }
}
const server = http.createServer(serverFunction);

server.listen(2000); // porta do servidor

console.log(`server is runing at http://127.0.0.1:2000`);