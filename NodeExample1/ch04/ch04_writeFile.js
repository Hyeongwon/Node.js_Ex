/**
 * Created by byunhyeongwon on 2017. 8. 28..
 */
var fs = require('fs');

fs.writeFile('./output.txt', "Hello world!", function(err) {

    if(err) console.log('Error : ' + err);

    console.log('output.text 파일에 데이터 쓰기 완료.');
});