/**
 * Created by byunhyeongwon on 2017. 8. 17..
 */
console.log('argv number of process: ' + process.argv.length);
console.dir(process.argv);

if( process.argv.length > 2) console.log('3rd param value : %s', process.argv[2]);

process.argv.forEach(function(item, index) {

    console.log(index + ' : ', item);
})