// Read the input and prepare the array for furter computation
import fs from 'fs';
import path from 'path';

import rawInputPath from './input.txt';
const inputPath = path.resolve(__dirname, rawInputPath);
const input = fs.readFileSync(inputPath, 'utf8').split('\n')[0];

function main1(hash) {
  const range = hash.split('-').map(Number);

  const password = Array(range[1] - range[0] + 1)
    .fill()
    .map((x, i) => range[0] + i)
    .filter(checkPassword);

  return password.length;
}

function main2(hash) {
  const range = hash.split('-').map(Number);

  const password = Array(range[1] - range[0] + 1)
    .fill()
    .map((x, i) => range[0] + i)
    .filter(checkPassword2);

  return password.length;
}

function checkPassword(x) {
  const s = x.toString();
  const u = [...x.toString()].reduce((a, b) => a.add(b), new Set());

  let goodPassword =
    [...x.toString()].sort().join('') === s && s.length === 6 && u.size < 6;

  return goodPassword;
}

function checkPassword2(x) {
  const s = x.toString();
  const u = [...x.toString()].reduce((a, b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a;
  }, {});

  let goodPassword =
    [...x.toString()].sort().join('') === s &&
    s.length === 6 &&
    Object.keys(u).length < 6 &&
    Boolean(Object.values(u).filter(uu => uu === 2).length);

  return goodPassword;
}

// Test driven development
console.log('\nTest cases for task #1:');
[
  {
    actual: checkPassword(111111),
    expected: true
  },
  {
    actual: checkPassword(223450),
    expected: false
  },
  {
    actual: checkPassword(123789),
    expected: false
  }
].forEach(test => console.log(test.actual === test.expected, '\t', test));

console.log('\nTest cases for task #2:');
[
  {
    actual: checkPassword2(112233),
    expected: true
  },
  {
    actual: checkPassword2(123444),
    expected: false
  },
  {
    actual: checkPassword2(111122),
    expected: true
  }
].forEach(test => console.log(test.actual === test.expected, '\t', test));

// Print the results of the returned solution
console.log('\nResults:', main1(input), main2(input));
