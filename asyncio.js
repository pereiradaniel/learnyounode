var fs = require('fs');

var file = process.argv[2];

output = fs.readFile(file, function(err, content){
	console.log(content.toString().split('\n').length - 1);
});