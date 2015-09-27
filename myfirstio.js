var fs = require('fs');

var output = fs.readFileSync(process.argv[2]);

output = output.toString().split('\n');

console.log(output.length - 1);