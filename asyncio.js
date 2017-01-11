// fs module required from the Node core library to perform file system operations
  var fs = require('fs');

// Use fs.readFile() instead of fs.readFileSync()
  var file = process.argv[2];

// Instead of using the return value collect the value from a callback function that you pass in as the second argument.

// SOLUTION 1
	// output = fs.readFile(file, function(err, content){
	// 	console.log(content.toString().split('\n').length - 1);
	// });

  // Remember that idiomatic Node.js callbacks normally have the signature:
  //		function callback(err, data) { /* ... */ }

  // If no err, second argument should be buffer object
  // 'utf8' can be supplied as the second argument and callback as the third and you will get a string instead of a buffer

// SOLUTION 2
	output = fs.readFile(file, 'utf8', function(err, content){
		console.log(content.split('\n').length - 1);
	});

// OFFICIAL SOLUTION
  // var fs = require('fs')  
  // var file = process.argv[2]  
   
  // fs.readFile(file, function (err, contents) {  
  //  // fs.readFile(file, 'utf8', callback) can also be used  
  //  var lines = contents.toString().split('\n').length - 1  
  //  console.log(lines)  
  // }) 