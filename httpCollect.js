var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  var msg = "";
  response.setEncoding('utf8');
  response.on('data', function(data) {
    msg += data;
  });
  response.on('end', function(data) {
    console.log(msg.length);
    console.log(msg);
  })
});
