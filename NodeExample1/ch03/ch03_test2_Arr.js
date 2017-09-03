/**
 * Created by byunhyeongwon on 2017. 8. 21..
 */
var Users = [{name : 'Josh', age : 20}, {name : 'John', age : 21}];
Users.push({name : 'Joy', age : 22});

console.log(Users.length);
console.log(Users[0].name);

var add = function(a, b) {

    return a + b;
};

Users.push(add);

console.log(Users.length);
console.log(Users[3](10, 10));

for(var i = 0; i < Users.length - 1; i++) {

    console.log(i + ': %s', Users[i].name);
}

Users.forEach(function(item, index) {

    console.log(index + "%s", item.name);

});
