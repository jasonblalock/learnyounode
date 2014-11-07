var http = require('http');
var url = process.argv[2];
var messageArr = [];
var count = 0;

function httpGet(index) {
  http.get(process.argv[index + 2], function (response) {
    var msg = "";
    response.setEncoding('utf8');
    response.on('data', function(data) {
      msg += data;
    });
    response.on('end', function(data) {
      messageArr[index] = msg;
      count++
      if (count == 3) {
        printResults();
      }
    })
  });
}

function printResults() {
  for (var i = 0; i < 3; ++i) {
    console.log(messageArr[i]);
  }
}

for (var i = 0; i < 3; ++i) {
  httpGet(i);
}
