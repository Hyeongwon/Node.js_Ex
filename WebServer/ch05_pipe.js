/**
 * Created by byunhyeongwon on 2017. 8. 30..
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer();
var port = 3000;

server.listen(port, function() {

    console.log("start ...!!!");
});

server.on('request', function(req, res) {

   console.log("request call ...!!!");

    var filename = 'house.png';
    var infile = fs.createReadStream(filename, {flags : 'r'});
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err, stats) {

        filelength = stats.size;
    });

    //Write Header
    res.writeHead(200, {"Content-Type" : "image/png"});

    // 파일 내용을 스트림에서 읽어 본문에 쓰기
    infile.on('readable', function() {

        var chunk;
        while(null != (chunk = infile.read())) {

            console.log("data size : %d", chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf8', function(err) {

                console.log('파일 부분 쓰기 완료 : %d, 파일 크기 %d', curlength, filelength);

                if(curlength >= filelength) {
                    res.end();
                }
            });
        }
    });
});

server.on('close', function() {

    console.log("server close ...!!!");
})