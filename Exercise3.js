var fs =require('fs');

// var a=fs.readFileSync('E3.txt');
var a=fs.readFileSync(process.argv[2]);

var str = a.toString();

var res = str.split("\n");

console.log(res.length-1);
