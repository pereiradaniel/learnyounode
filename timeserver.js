// Load the net module into net variable
  var net = require("net");

// Load the port number from the first command line argument
  var portNumber = process.argv[2]

// Load the server module into server variable
  var server = net.createServer(function (socket) {
    socket.end(getDate() + "\n");
  })

  server.listen(portNumber)

// getDate function returns formatted date and time
  function getDate() {
    // Put current date into variable called today
    var today = new Date();

    // return date format:  "YYYY-MM-DD hh:mm"
    return [ today.getFullYear(),
             formatNumber(today.getMonth() + 1),
             formatNumber(today.getDate()) ].join("-")
             + " " +
           [ formatNumber(today.getHours()),
             formatNumber(today.getMinutes()) ].join(":");
  }

// formateNumber returns integers zero-filled to to characters
  function formatNumber(number) {
    // if number is less than ten (single digit), return "0 + that number"
    return number < 10 ? "0" + number : number;
  }

//  OFFICIAL SOLUTION
  // var net = require('net')

  // function zeroFill(i) {
  //  return (i < 10 ? '0' : '') + i
  // }

  // function now () {
  //  var d = new Date()
  //  return d.getFullYear() + '-'
  //    + zeroFill(d.getMonth() + 1) + '-'
  //    + zeroFill(d.getDate()) + ' '
  //    + zeroFill(d.getHours()) + ':'
  //    + zeroFill(d.getMinutes())
  // }

  // var server = net.createServer(function (socket) {
  //  socket.end(now() + '\n')
  // })

  // server.listen(Number(process.argv[2]))

//  Read my blog post for an explanation and breakdown of this challenge: