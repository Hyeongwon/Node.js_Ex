/**
 * Created by byunhyeongwon on 2017. 9. 3..
 */
var express = require('express'),
    http = require('http'),
    path = require('path');

var bodyPaser = require('body-parser'),
    static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyPaser.urlencoded({ extended: false}));

app.use(bodyPaser.json());

app.use(static(path.join(__dirname, 'public')));

var router = express.Router();

router.route('/process/login/:name').post(function(req, res) {

    console.log('/process/login/:name process...!!!');

    var paramName = req.params.name;

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express Server Response...!!!</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<br><br><a href="/login.html">Back to login page</a>')
    res.end();
});

app.use('/', router);

http.createServer(app).listen(3000, function() {

    console.log('Start Express Server...!!!');
});
