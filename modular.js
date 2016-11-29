// Load function from module.js to variable called myModule
	var myModule = require('./module.js')

// Load 3rd argument from command line into variable dir
	var dir = process.argv[2]

// Load 4th argument from command line into variable filterString
	var filterString = process.argv[3]

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

    // var filterFn = require('./solution_filter.js')
    // var dir = process.argv[2]
    // var filterStr = process.argv[3]

    // filterFn(dir, filterStr, function (err, list) {
    //   if (err) {
    //     return console.error('There was an error:', err)
    //   }

    //   list.forEach(function (file) {
    //     console.log(file)
    //   })
    // })
