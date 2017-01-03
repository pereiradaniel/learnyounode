// Load through2-map module into map variable
  var map = require('through2-map');

// Load http module into http variable
  var http = require('http');

// Load port number into portNumber from first command line argument
  var portNumber = process.argv[2]

// Create server and listen on port number
  http.createServer(function (req, res) {
    // Detects if incoming request is a POST request
      if (req.method === 'POST') {
        // pipe request returning transformed stream
          req.pipe(map(function (chunk) {
            // return uppercased string
              return chunk.toString().toUpperCase();
          })).pipe(res);
      }
  }).listen(portNumber);


// SOLUTION
  // var http = require('http')  
  // var map = require('through2-map')  
   
  // var server = http.createServer(function (req, res) {  
  //  if (req.method != 'POST')  
  //    return res.end('send me a POST\n')  
   
  //  req.pipe(map(function (chunk) {  
  //    return chunk.toString().toUpperCase()  
  //  })).pipe(res)  
  // })  
   
  // server.listen(Number(process.argv[2]))  