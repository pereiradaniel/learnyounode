// Load node http module into http variable
	var http = require('http');
// Load Buffer List module into bl variable
	var bl = require('bl');
// Initialise results array
	var results = []
// Initialize counter
	var count = 0
// Set urls into var urlsArray
	var urlsArray = process.argv.slice(2);
// Set number of urls in variable
	var noOfUrls = urlsArray.length;

// A function for printing results to the console
	function printResults () {
		// Print results for as many times are there are urls, indexed against var i
		for (var i = 0; i < noOfUrls; i++) {
			// Output result from index var i
				console.log(results[i])
		}
	}

// A function for getting http response
	function httpGet (index) {
		// Send http get request using correct index
		http.get(urlsArray[index], function (response) {
			response.pipe(bl(function (err, data) {
				// Respond to error
					if (err) {
						// Output error to console
							return console.error(err)
					}
				// Pass data into results array with index
					results[index] = data.toString()
				// Increment counter to detect when all urls have been requested
					count++
				// Detect when get counter is equal to number of urls, then run printResults()
					if (count === noOfUrls) {
						printResults()
					}
			}))
		})
	}

// Run httpGet as many times as there are URLS
	for (var i = 0; i < noOfUrls; i++) {
		httpGet(i)
	}

// ALTERNATE SOLUTIONS

	// Solution 1
		// var http = require('http');

		// var urls = process.argv.slice(2);
		// var results = [];

		// // initialise results array
		// for (i = 0; i < urls.length; i++) {
		//   results[i] = null;
		// }

		// for (i = 0; i < urls.length; i++) {
		//   (function(i) {
		//     http.get(urls[i], function(request) {
		//       var result = "";
		//       request.setEncoding("utf8");
		//       request.on("data", function(data) {
		//         result += data;
		//       });
		//       request.on("end", function() {
		//         results[i] = result;
		//         var resultCount = 0;
		//         for (j = 0; j < results.length; j++) {
		//           if (results[j] != null) resultCount++;
		//         }
		//         if (resultCount == results.length) {
		//           for (j = 0; j < results.length; j++) {
		//             console.log(results[j]);
		//           }
		//         }
		//       });
		//     });
		//   })(i);
		// }


	// OFFICIAL SOLUTION
	    // var http = require('http')
	    // var bl = require('bl')
	    // var results = []
	    // var count = 0

	    // function printResults () {
	    //   for (var i = 0; i < 3; i++) {
	    //     console.log(results[i])
	    //   }
	    // }

	    // function httpGet (index) {
	    //   http.get(process.argv[2 + index], function (response) {
	    //     response.pipe(bl(function (err, data) {
	    //       if (err) {
	    //         return console.error(err)
	    //       }

	    //       results[index] = data.toString()
	    //       count++

	    //       if (count === 3) {
	    //         printResults()
	    //       }
	    //     }))
	    //   })
	    // }

	    // for (var i = 0; i < 3; i++) {
	    //   httpGet(i)
	    // }

//  Read my blog post for an explanation and breakdown of this challenge:
//  https://medium.com/coding-and-web-development/learnyounode-exercise-9-331c9dcd118b#.5dhhxsnk6