// Read the input and prepare the array for furter computation
import fs from 'fs';
import path from 'path';
import rawInputPath from './input.txt';
const inputPath = path.resolve(__dirname, rawInputPath);
const input = fs.readFileSync(inputPath, 'utf8');

// Solve the puzzle #1
function main1(noun, verb) {
  let x = input.split(',').map(Number);
  x[1] = noun;
  x[2] = verb;

  for (let i = 0; i <= x.length; i = i + 4) {
    const range = x.slice(i, i + 4);
    const y1 = x[i + 1];
    const y2 = x[i + 2];
    const y3 = x[i + 3];

    switch (x[i]) {
      case 1: {
        x[y3] = x[y1] + x[y2];
        break;
      }

      case 2: {
        x[y3] = x[y1] * x[y2];
        break;
      }

      case 99: {
        return x.join();
      }
    }
  }

  return x.join(',');
}

// Solve the puzzle #2
function main2() {
  const expected = 19690720;
  const range = Array(100)
    .fill()
    .map((x, i) => i);

  const temp = [];

  range.forEach(noun =>
    range.forEach(verb => {
      const result = main1(noun, verb);
      // console.log(result);
      if (Number(result.split(',')[0]) === expected) {
        temp.push(result);
      }
    })
  );

  const yeah = temp[0].split(',').map(Number);
  return 100 * yeah[1] + yeah[2];
}

// Test driven development
console.log('\nTest cases for task #1:');
[
  {actual: main1('1,0,0,0,99'), expected: '2,0,0,0,99'},
  {actual: main1('2,3,0,3,99'), expected: '2,3,0,6,99'},
  {actual: main1('2,4,4,5,99,0'), expected: '2,4,4,5,99,9801'},
  {actual: main1('1,1,1,4,99,5,6,0,99'), expected: '30,1,1,4,2,5,6,0,99'}
].forEach(test => console.log('\t', test.actual === test.expected, test));

// Print the results of the returned solution
console.log('\nResults:', main1(12, 2).split(',')[0], main2());
