// fs module required from the Node core library to perform file system operations
  var fs = require('fs');

// Assign the file path to a variable
  var filePath = process.argv[2];

// .readFileSync() outputs a buffer object with the contents of the file
  var output = fs.readFileSync(filePath);

// Buffer objects can be converted to strings
// Using \n as a delimiter separates the buffer object into subtrings at each new line
  output = output.toString().split('\n');

// The test file does not have a newline character at the end of the last line so there is one more element than the number of newlines
  console.log(output.length - 1);

//  Read my blog post for an explanation and breakdown of this challenge:
//  https://medium.com/coding-and-web-development/learnyounode-exercise-3-2aa8d6aba68a#.njwfdxqqt