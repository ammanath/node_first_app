
const Logger =  require('./logger');
const logger = new Logger();

const http = require('http');

const EventEmitter = require('events');
const { Socket } = require('dgram');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write('Hello world');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,55]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

//Register a listener
logger.on('logging', (arg)=> {
    console.log('Listener called', arg);
})

logger.log('Log message 940');