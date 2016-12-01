// fs module required from the Node core library to perform file system operations
  var fs = require('fs');

// .readFileSync() outputs a buffer object with the contents of the file
  var output = fs.readFileSync(process.argv[2]);

// Buffer objects can be converted to strings
// Using \n as a delimiter separates the buffer object into subtrings at each new line
  output = output.toString().split('\n');

// The test file does not have a newline character at the end of the last line so there is one more element than the number of newlines
  console.log(output.length - 1);