var argSize = process.argv.length;
var sum = 0;

for (var i = 2; i < argSize; ++i) {
  sum += +process.argv[i];
}

console.log(sum);
