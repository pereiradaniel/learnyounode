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

// SOLUTION 1
	// readdir takes a pathname as its first argument, a callback as its second
		fs.readdir(process.argv[2], function(err, list) {
			// iterate through list of files (list.length)
		  for (i = 0; i < list.length; i++) {
		  	// if extension of file at index list[i] matches filter and adds a '.'
		  	if (path.extname(list[i]) === "." + process.argv[3]) {
		      // outputs current file from list index[i]
		      console.log(list[i]);
		  	}else{};
		   }
		 });

// OFFICIAL SOLUTION
	// var fs = require('fs')  
	// var path = require('path')  
	 
	// fs.readdir(process.argv[2], function (err, list) {  
	//  list.forEach(function (file) {  
	//    if (path.extname(file) === '.' + process.argv[3])  
	//      console.log(file)  
	//  })  
	// })  