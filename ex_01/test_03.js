var fs = require('fs');

// 파일을 동기식 IO로 읽어 들입니다.
var data = fs.readFileSync('./package.json', 'utf-8');

console.log(data);

// //파일을 비동기식 IO로 읽어 들입니다
// fs.readFile('./package.json', 'utf-8', function (err, data) {
//
//     console.log(data);
// });
//
// console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');
//
// //파일에 데이터를 씁니다.
// fs.writeFile('./output.txt', 'Hello World', function (err) {
//
//     if(err) {
//
//         console.log('Error : ' + err);
//     }
//
//     console.log('output.txt 파일에 데이터 쓰기 완료.');
// });
//
// //File Open, write data and File close
// fs.open('./output.txt', 'w', function (err, fd) {
//
//     if(err) throw err;
//
//     var buf = new Buffer('안녕\n');
//     fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
//
//         if(err) throw err;
//
//         console.log(err, written, buffer);
//
//         fs.close(fd, function () {
//
//             console.log('File open write data close file');
//         });
//     });
// });

// fs.open('./output.txt', 'r', function (err, fd) {
//
//     if(err) throw err;
//
//     var buf = new Buffer(10);
//     console.log('Buffer Type : %s', Buffer.isBuffer(buf));
//
//     fs.read(fd, buf, 0, buf.length, null, function (err2, bytesRead, buffer) {
//
//         if(err) throw err;
//
//         var inStr = buffer.toString('utf8', 0, bytesRead);
//         console.log('Written data in file : %s', inStr);
//
//         console.log(err, bytesRead, buffer);
//
//         fs.close(fd, function () {
//
//             console.log('output.txt file read complete');
//         });
//     });
// });


var infile = fs.createReadStream('./output.txt', {flag: 'r'});
var outfile = fs.createWriteStream('./output2.txt', {flag: 'w'});

infile.on('data', function (data) {

    console.log('Written data', data);
    outfile.write(data);
});

infile.on('end', function () {

    console.log('File Read exit');
    outfile.end(function () {

        console.log('File Write exit');
    });
});