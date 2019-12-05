// Read the input and prepare the array for furter computation
import fs from 'fs';
import path from 'path';

import rawInputPath from './input.txt';
const inputPath = path.resolve(__dirname, rawInputPath);
const input = fs.readFileSync(inputPath, 'utf8').split('\n')[0];

function main1() {
  return false;
}

function main2() {
  return false;
}

// Test driven development
console.log('\nTest cases for task #1:');
[
  {
    actual: main1(),
    expected: true
  },
  {
    actual: main1(),
    expected: true
  },
  {
    actual: main1(),
    expected: true
  }
].forEach(test => console.log(test.actual === test.expected, '\t', test));

console.log('\nTest cases for task #2:');
[
  {
    actual: main2(),
    expected: true
  },
  {
    actual: main2(),
    expected: false
  },
  {
    actual: main2(),
    expected: true
  }
].forEach(test => console.log(test.actual === test.expected, '\t', test));

// Print the results of the returned solution
console.log('\nResults:', main1(), main2());
