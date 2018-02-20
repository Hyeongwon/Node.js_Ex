/**
 * Created by byunhyeongwon on 2017. 8. 28..
 */
var Calc = require('./ch04_calc3');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함.');