var url = require('url');

var curURL = url.parse('https://m.search.naver.com/search.naver?' +
            'query=steve+jobs&where=m&sm=mtp_hty');

var curStr = url.format(curURL);

console.log('address String : %s', curStr);
console.log(curURL);

// 요청 파라미터 구분하기
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));

// process.on('exit', function () {
//
//     console.log('exit Event');
// });
//
// setTimeout(function (args) {
//     console.log('2초 후에 시스템 종료 시도함.');
//
//     process.exit();
// }, 2000);

process.on('tick', function (count) {

    console.log('tick event 발생함 : %s', count);
});

setTimeout(function (args) {

    console.log('2초 후에 tick 이벤트 전달 시도함');

    process.emit('tick', '2');

}, 2000);

var Calc = require('./calc2');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함.');