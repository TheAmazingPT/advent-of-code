const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, 'input.txt');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

console.log(main(input));

function main(input) {
  const numbers = input.map(Number);
  return numbers
    .map(i => {
      const x = numbers.filter(j => (i + j === 2020 ? j : false));
      return x.length ? x[0] * i : null;
    })
    .filter(Boolean);
}
