var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
  var date = new Date();
  console.log(date.getMonth());

  socket.write("" + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + ('0' + date.getDate()).slice(-2) + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + '\n');
  socket.end();
});
server.listen(port);
