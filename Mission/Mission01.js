var fs = require('fs');
var readline = require('readline');

var instream = fs.createReadStream('output.txt');
var reader = readline.createInterface(instream, process.stdout);

var count = 0;

reader.on('line', function(line) {

    count++;

    var tokens = line.split(' ');

    if(tokens != undefined && tokens.length > 0) {

        console.log('#' + count + ' ->' + tokens[0]);
    }

    reader.on('close', function(line) {

        console.log('파읽을 모두 읽음.!!');
    });
});

