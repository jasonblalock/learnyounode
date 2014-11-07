var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function callback(err, result) {
  if (!err) {
    var lines = result.split('\n').length - 1;
    console.log(lines);
  }
})
