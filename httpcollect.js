// Load node http module into http variable
	var http = require('http');

// Load url from first command line argument into url variable
	var url = process.argv[2].toString();

// Load Buffer List module into bl variable
	var bl = require('bl');

// Use http.get() to pass URL and act on response to callback
	http.get(url, function(response) {
		// Pipe data from response
			response.pipe(bl(function (err, data) {
				// Repsond to error
					if (err) {
						return console.error(err)
					}
				// Else respond to data
					data = data.toString()
					// Output number of characters in data string
					console.log(data.length)
					// Output complete string of characters from server
					console.log(data)
			}))
	});


// Official solution
	// var http = require('http')
	// var bl = require('bl')
	// http.get(process.argv[2], function (response) {
	//  response.pipe(bl(function (err, data) {
	//    if (err)
	//      return console.error(err)
	//    data = data.toString()
	//    console.log(data.length)
	//    console.log(data)
	//  }))
	// })
