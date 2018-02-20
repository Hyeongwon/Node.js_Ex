/**
 * Created by byunhyeongwon on 2017. 8. 30..
 */
var http = require('http');

var option = {

    host: 'www.google.com',
    post: 80,
    path: '/'
};

var req = http.get(option, function(res) {

    var resData = '';

    res.on('data', function(chunk) {

        resData += chunk;
    });

    res.on('end', function() {

        console.log(resData);
    });
});

req.on('error', function(err) {

    console.log("err 발생 : " + err.message);
});