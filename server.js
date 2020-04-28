const http = require('http');
const { requestListener } = require('./callback.js');
const port = 8000;
const server = http.createServer(requestListener);

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('server listen on port' + port)
    }
});