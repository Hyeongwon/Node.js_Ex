/**
 * Created by byunhyeongwon on 2017. 8. 29..
 */
var fs = require('fs');

fs.open('output.txt', 'r', function(err, fd) {

    if(err) throw err;

    var buf = new Buffer(10);
    console.log("buffer type : %s", Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, null, function(err, byteRead, buffer) {

        if(err) throw err;

        var inStr = buffer.toString('utf8', 0, byteRead);
        console.log("파일에서 읽은 데이터 : %s", inStr);

        console.log(err, byteRead, buffer);

        fs.close(fd, function () {

            console.log('output.txt complete');
        });
    });
});