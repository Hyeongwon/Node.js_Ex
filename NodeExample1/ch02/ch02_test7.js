/**
 * Created by byunhyeongwon on 2017. 8. 17..
 */
var os = require('os');

console.log('hostname : %s', os.hostname());
console.log('system memory : %d / %d', os.freemem(), os.totalmem());
console.log('system cpu info\n');
console.dir(os.cpus());
console.log('system network info\n');
console.dir(os.networkInterfaces());