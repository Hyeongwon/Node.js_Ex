console.log("111");

var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000; i++) {

    result += i;
}

console.timeEnd('duration_sum');
console.log('%d', result);

console.log('FileName : %s', __filename);
console.log('DirName : %s', __dirname);

console.log('argv : ' + process.argv.length);
console.log(process.argv);

if(process.argv.length > 2) {

    console.log('3rd param val : %s', process.argv[2]);
}

process.argv.forEach(function (item, index) {

    console.log(index + ':' + item);
});

/*
var calc = {};
calc.add = function (a, b) {

    return a + b;
}*/

var calc = require('./calc');

console.log('Calc.add result : %d', calc.add(10, 10));

// var nconf = require('nconf');
// nconf.env();
//
// console.log("OS env val %s", nconf.get('OS'));

var os = require('os');

// console.log(os.hostname());
// console.log(os.freemem(), os.totalmem());
// console.log(os.cpus());

/*-----Call Back-----*/

function add(a, b, callback) {

    var result = a + b;
    callback(result);
}

add(10, 10, function(result) {

    console.log('%d', result);
});