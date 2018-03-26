
var fs = require('fs');
var n = undefined;

function findline(callback) {
  fs.readFile(process.argv[2], function doneReading(err, data) {
    var str = data.toString();
     n = str.split("\n").length-1;
    callback();
  })
}

function l() {
  console.log(n);
}

findline(l);
