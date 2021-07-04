
const Logger =  require('./logger');
const logger = new Logger();

const EventEmitter = require('events');


//Register a listener
logger.on('logging', (arg)=> {
    console.log('Listener called', arg);
})

logger.log('Log message 940');