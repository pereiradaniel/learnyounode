var fs = require('fs');

fs.readFile(process.argv[2], function(err, content){
	console.log(content.toString().split('\n').length - 1);
});