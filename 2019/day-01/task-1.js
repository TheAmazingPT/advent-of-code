// Read the input and prepare the array for furter computation
const inputPath = require('path').resolve(__dirname, 'input.txt');
const input = require('fs').readFileSync(inputPath, 'utf8')
  .split('\n')
  .filter(Boolean);

// Solve the puzzle
function main() {
  return input
    .map(Number)
    .reduce((temp, x) => temp + getFuel(x), 0);
}

function getFuel(x) {
  return Math.floor((x / 3) - 2);
}

// Test driven development
[
  {actual: getFuel(12), expected: 2},
  {actual: getFuel(14), expected: 2},
  {actual: getFuel(1969), expected: 654},
  {actual: getFuel(100756), expected: 33583}
].forEach(test => console.log(test.actual === test.expected, test));

// Print the results of the returned solution
console.log(main(), '\n');
