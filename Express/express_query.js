/**
 * Created by byunhyeongwon on 2017. 9. 3..
 */
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next) {

    console.log('first Middleware...!!!');

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다...!!!</h1>');
    res.write('<div><p>User-Agent :' + userAgent + ' </p></div>');
    res.write('<div><p>Param-Name :' + paramName + ' </p></div>');
    res.end();
});

http.createServer(app).listen(3000, function() {

    console.log('Express Server start!!');
});