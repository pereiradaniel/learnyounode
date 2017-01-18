// Load function from module.js to variable called myModule
	var myModule = require('./module.js')

// Load 3rd argument from command line into variable dir
	var dir = process.argv[2]

// Load 4th argument from command line into variable filterString
	var filterString = "." + process.argv[3]

// Run myModule passing it the required info
//		Function takes:
//			1st argument is directory name
//			2nd argument is string to filter
//			3rd argument is a callback function
	myModule(dir, filterString, function(err, list) {
		// Print error to console if error
		if (err)
			return console.error('Error: ', err)
		// iterate through list and output each file to the console
		list.forEach(function (file) {
			console.log(file)
		})
	})

// Official solution:

 // ─────────────────────────────────────────────────────────────────────────────  
 //  _/usr/lib/node_modules/learnyounode/exercises/make_it_modular/solution/sol  
 //  ution.js_ :  
   
 //     var filterFn = require('./solution_filter.js')  
 //     var dir = process.argv[2]  
 //     var filterStr = process.argv[3]  
       
 //     filterFn(dir, filterStr, function (err, list) {  
 //       if (err)  
 //         return console.error('There was an error:', err)  
       
 //       list.forEach(function (file) {  
 //         console.log(file)  
 //       })  
 //     })  
   
 // ─────────────────────────────────────────────────────────────────────────────  
 //  _/usr/lib/node_modules/learnyounode/exercises/make_it_modular/solution/sol  
 //  ution_filter.js_ :  
   
 //     var fs = require('fs')  
 //     var path = require('path')  
       
 //     module.exports = function (dir, filterStr, callback) {  
       
 //       fs.readdir(dir, function (err, list) {  
 //         if (err)  
 //           return callback(err)  
       
 //         list = list.filter(function (file) {  
 //           return path.extname(file) === '.' + filterStr  
 //         })  
       
 //         callback(null, list)  
 //       })  
 //     }  
   
