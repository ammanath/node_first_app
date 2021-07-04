
const loger =  require('./logger');

const EventEmitter = require('events');
const emitter = new EventEmitter();


//Register a listener
emitter.on('messageLogged', (arg)=> {
    console.log('Listener called', arg);
})

//Rasie an event
emitter.emit('messageLogged',{id:1,url:'url'});

loger.log('Log message 940');