/**
 * Created by byunhyeongwon on 2017. 8. 30..
 */
var http = require('http');

var options = {

    host: 'www.google.com',
    port: '80',
    method: 'POST',
    path: '/',
    headers: {}
};

var resData = '';

var req = http.request(options, function(res) {

    res.on('data', function(chunk) {

        resData += chunk;
    });

    res.on('end', function() {

        console.log(resData);
    });
});

options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = "q=actor";
options.headers['Content-Type'] = req.data.length;

req.on("error", function(err) {

    console.log("err :" + err.message);
});

req.write(req.data);
req.end();