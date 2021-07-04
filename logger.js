const EventEmitter = require('events');
const emitter = new EventEmitter();


var url = 'http://mylogger.io/log';

emitter.on('logging', arg=>console.log('Logging called', arg));

function log(message){
    //Send http request to log
    console.log(message);
    emitter.emit('logging', {data:message});
}


module.exports.log = log;

