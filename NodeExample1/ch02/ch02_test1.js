/**
 * Created by byunhyeongwon on 2017. 8. 17..
 */
var result = 0;

console.time('duration_sum');

for(var i = 1; i <= 1000; i++) {

    result += i;
}

console.timeEnd('duration_sum');
console.log('1 ~ 100 sum result : %d', result);

console.log('current exe file name : %s', __filename);
console.log('current exe file path : %s', __dirname);

var Person = {name : "Josh", age : 20};
console.log(Person);
console.dir(Person);