/**
 * Created by byunhyeongwon on 2017. 8. 30..
 */
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next) {

    console.log("fist middleware...!!!");

    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.end('<h1>Express Response result...!!!</h1>');
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {

    console.log('start express : ' + app.get('port'));
});