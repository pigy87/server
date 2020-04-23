const http = require('http');
const fs = require('fs');
const { requestListener } = require('./callback.js');
const port = 3000;
const server = http.createServer(requestListener);

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('server listen on port' + port)
    }
});