/**
 * 
 **/

var loggingConfig = require("../config")[env].logging;
var bunyan = require('bunyan'); // Bunyan dependency
var RotatingFileStream = require('bunyan-rotating-file-stream');
var fs = require('fs');

fs.existsSync('logs') || fs.mkdirSync('logs');

var logger = bunyan.createLogger({
    name: loggingConfig.name,
    serializers: bunyan.stdSerializers,
    streams: [
        {
            stream: new RotatingFileStream({
                type: 'rotating-file',
                path: loggingConfig.path,
                rotateExisting: true,
                threshold: loggingConfig.sizeOflog,
                template: 'server.%Y%m%d.log'
            })
        },
        {
            level: bunyan.INFO,
            stream: process.stdout
        }
    ]
});

module.exports = logger;
