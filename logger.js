const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message){
        //Send http request to log
        console.log(message);
        
        //Raise an event
        this.emit('logging', {data:message});
    }

}
module.exports = Logger;

