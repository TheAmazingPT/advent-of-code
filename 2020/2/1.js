const fs = require('fs');
const path = require('path');

// Fetch the input data
const inputPath = path.resolve(__dirname, 'input');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

console.log(main(input));

function main(input) {
  const pwmap = input.map(x => {
    const [options, password] = x.split(': ');
    const [min, max, char] = options.replace(/\W/g, ':').split(':');

    return {options: {min: Number(min), max: Number(max), char}, password};
  });

  return pwmap.filter(x => {
    const count = Array.from(x.password).filter(y => y === x.options.char)
      .length;

    return count >= x.options.min && count <= x.options.max;
  }).length;
}
