//  Load node http module into http variable
	var http = require('http');

// Load URL from 1st command line arg into url variable
	var url = process.argv[2].toString();

// Use http.get() method to pass URL and act on response to callback
	http.get(url, function(response) {
		// Convert buffer object to string
			response.setEncoding('utf8')
		// Respond to data
			response.on('data', console.log);
		// Respond to error
			response.on('error', console.error);
	}).on('error', console.error);

// Official solution
   // var http = require('http')

   //  http.get(process.argv[2], function (response) {
   //    response.setEncoding('utf8')
   //    response.on('data', console.log)
   //    response.on('error', console.error)
   //  }).on('error', console.error)
