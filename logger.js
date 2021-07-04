var url = 'http://mylogger.io/log';

function log(message){
    //Send http request to log
    console.log(message);
}


module.exports.log = log;

