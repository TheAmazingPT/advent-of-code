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
      const x = numbers
        .map(j => {
          const y = numbers
            .map(h => (i + j + h === 2020 ? [i, j, h] : null))
            .filter(Boolean);
          return y.length ? y[0] : null;
        })
        .filter(Boolean);

      return x.length ? x[0][0] * x[0][1] * x[0][2] : null;
    })
    .filter(Boolean);
}
