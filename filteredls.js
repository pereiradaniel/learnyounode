// Load filesystems module into fs variable
	var fs = require('fs');

// Load Node's path module into path variable
	var path = require('path');

// Use fs.readdir() and pass the pathname as first argument, and a callback as the second
// 		Callback signature:
//		function callback (err, list) { /* .. */ }

// List is an array of filename strings

// process.argv[2] is the path
// process.argv[3] is the string with file extension to filter, ex: 'txt'

	fs.readdir(process.argv[2], function(err, list) {
	  for (i = 0; i < list.length; i++) {
	  	if (path.extname(list[i]) === "." + process.argv[3]) {
	      console.log(list[i]);
	  	}else{};
	    }
	  });