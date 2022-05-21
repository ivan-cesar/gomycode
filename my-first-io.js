const fs = require('fs');
var g = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(g);
