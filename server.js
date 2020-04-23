const http=require('http');
const callbackFile=require('./callback');
const callback=callbackFile.callBack;
const server=http.createServer(callback);

server.listen('3000');