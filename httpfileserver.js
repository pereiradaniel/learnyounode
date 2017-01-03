// Load the file server module into the fs variable
  var fs = require('fs');

// Load the http module into the http variable
  var http = require("http");

// Load port number from the first command line argument
  var portNumber = process.argv[2];

// Load the file from the second command line argument
  var file = process.argv[3];

// Create a server and listen on the portNumber
  http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type' : 'text/plain' });
    
    // Stream the file contents to the response
      fs.createReadStream(file).pipe(res);
  }).listen(portNumber);


// OFFICIAL SOLUTION
  // var http = require('http')  
  // var fs = require('fs')  
   
  // var server = http.createServer(function (req, res) {  
  //  res.writeHead(200, { 'content-type': 'text/plain' })  
   
  //  fs.createReadStream(process.argv[3]).pipe(res)  
  // })  
   
  // server.listen(Number(process.argv[2]))