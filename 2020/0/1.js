const fs = require('fs');
const path = require('path');

// Fetch the input data
const inputPath = path.resolve(__dirname, 'input');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

console.log(main(input));

function main(input) {
  return input;
}
