import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, 'input.txt');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

const sortedInput = input.map(countChars);

function countChars(inputString) {
  return Array.from(inputString).reduce((tmp, char) => {
    if (tmp[char]) {
      tmp[char]++;
    } else {
      tmp[char] = 1;
    }
    return tmp;
  }, {});
}

function checksum(sortedInput) {
  const charCounts = sortedInput.map(x => Object.values(x));
  const twoChars = charCounts.filter(x => x.includes(2));
  const threeChars = charCounts.filter(x => x.includes(3));

  return twoChars.length * threeChars.length;
}

console.log(checksum(sortedInput));
