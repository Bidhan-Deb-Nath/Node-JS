const http = require('http');

const createHtml = `<html><head><title>From</title></head>`;
const  closeHtml = `<form action ="/process" method ="post" ><input name ="message"/></form></body></html>`;
const server = (resquest, response)=>{
    if (resquest.url === '/') {
        response.write(createHtml);
        response.write(closeHtml);
        response.end();
    } else if (resquest.url === '/process' && resquest.method === 'POST') {
        resquest.on('data', chunk => console.log(chunk.toString()));
        response.write("Bidhan Deb Nath");
        response.write("\n web developer...\n");
        response.end();
    } else {
        response.write('404 Not Found!');
        response.end();
}
}

const createServer = http.createServer(server);
createServer.listen(5000);
console.log("Listening on port  http://127.0.0.1:5000");