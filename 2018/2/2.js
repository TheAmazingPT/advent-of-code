import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, 'input.txt');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

const inputCharList = input.map(x => Array.from(x));
const intersections = [];

inputCharList.forEach(x => {
  inputCharList.forEach(y => {
    if (x !== y) {
      intersections.push(compareStrings(x, y));
    }
  });
});

function compareStrings(x, y) {
  return x
    .map((char, index) => (char === y[index] ? char : null))
    .filter(Boolean)
    .join('');
}

const result = intersections.sort((x, y) => y.length - x.length).shift();

console.log(result);
