var fs = require('fs');
var path = require('path');

function filteredLS(dir, extension, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }
    list = list.filter(function(file) {
      return path.extname(file) === '.' + extension
    });
    callback(null, list)
  });
}

module.exports = filteredLS;
