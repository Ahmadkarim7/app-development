const http = require('http');
const fs = require('fs');

//create server
const server = http.createServer(function(request, response) {
    const url = request.url;

    response.writeHead(200, {'Content-Type': 'text/html'});

    if(url === '/home' || url === '/') {
        fs.createReadStream("index.html").pipe(response).on('finish', () => response.end());
    } else if(url === '/about') {
        fs.createReadStream('about.html').pipe(response).on('finish', () => response.end());
    } else {
        fs.createReadStream('404.html').pipe(response).on('finish', () => response.end());
    }
});

//server is listening to port 3000
server.listen(3000, function(){
    console.log('Server is running');
});




    /*----server for index.html
    const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'})
    const readStream = fs.createReadStream(__dirname + '/index.html')

    //piping
    readStream.pipe(response)
 
})
*/