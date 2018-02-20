/**
 * Created by byunhyeongwon on 2017. 8. 30..
 */
var http = require('http');
var fs = require('fs');
var async = require('async');
const readMultipleFiles = require('read-multiple-files');


var server = http.createServer();

var port = 3000;

server.listen(port, function(){

    console.log("!!!");
});

server.on('request', function(err, res) {

    console.log('client call ...!!!');

    readMultipleFiles(['bread1.png', 'bread2.png'], function (err, data) {

        if(err) {
            console.log(err.code);
            throw err;
        }

        res.writeHead(200, {"Content-Type" : "image/png"});

        for(var i = 0; i < data.length; i++) {

            res.end(data[i]);
        }

    })
});

server.on('close', function() {

    console.log('end');
});