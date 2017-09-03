/**
 * Created by byunhyeongwon on 2017. 8. 21..
 */
var age = 20;
console.log('age : %d', age);

var name = "girls generation";
console.log('name : %s', name);

var Person = {};

Person['age'] = 20;
Person['name'] = "Josh";
Person.mobile = '010-5555-5602';

console.log('age : %d', Person.age);
console.log('name : %s', Person.name);
console.log('mobile : %s', Person.mobile);

function add(a, b) {

    return a + b;
}

var result = add(10, 20);

console.log('더하기 (10, 10): %d', result);

var add1 = function(a, b) {

    return a + b;
};

var result1 = add1(10, 20);

console.log('더하기 (10, 10) : %d', result1);

var Person1 = {};

Person1.age = 20;
Person1.name = "Josh";
Person1.add = function(a, b) {

    return a + b;
};

console.log('더하기 %d', Person1.add(10, 20));