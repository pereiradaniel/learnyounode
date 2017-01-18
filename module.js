// Load filesystem module into fs variable
	var fs = require('fs')
// Load path module into path variable
	var path = require('path')
// Define a single function export assign it to the module.exports object
	module.exports = function(dir, fileString, callback) {
		// use .readdir() to return the dir contens
		// pass a callback function as third argument
		fs.readdir(dir, function (err, list) {
			// return err if error
			if (err)
				return callback(err)
			// use .filter() to return filtered directory contents to list variable
			list = list.filter(function (file) {
				return path.extname(file) === fileString
			})
			callback(null, list)
		})
	}