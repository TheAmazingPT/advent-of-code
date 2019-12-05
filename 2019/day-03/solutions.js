import _intersectionWith from 'lodash.intersectionwith';

// Read the input and prepare the array for furter computation
import fs from 'fs';
import path from 'path';
import rawInputPath from './input.txt';
const inputPath = path.resolve(__dirname, rawInputPath);
const input = fs.readFileSync(inputPath, 'utf8');
const lines = input.split('\n');

// Solve the puzzle #1
function main1(wireA, wireB) {
  const a = getVisitedFields(wireA.split(',')).map(String);
  const b = getVisitedFields(wireB.split(',')).map(String);

  const intersections = getIntersections(a, b).map(
    i => Math.abs(i[0]) + Math.abs(i[1])
  );

  return intersections.filter(Boolean).sort((sa, sb) => sa - sb)[0];
}

function getVisitedFields(wire) {
  return wire.reduce(
    (temp, instruction) => {
      const steps = Number(instruction.slice(1));
      const newTemp = [...temp];

      Array(steps)
        .fill()
        .map((x, i) => i + 1)
        .forEach(i =>
          newTemp.push(getNextField(newTemp[newTemp.length - 1], instruction))
        );

      return newTemp;
    },
    [[0, 0]]
  );
}

function getNextField(base, instruction) {
  const direction = instruction[0];

  switch (direction) {
    case 'R':
      return [base[0] + 1, base[1]];
    case 'L':
      return [base[0] - 1, base[1]];
    case 'U':
      return [base[0], base[1] + 1];
    case 'D':
      return [base[0], base[1] - 1];
  }
}

function getIntersections(a, b) {
  const intersections = [];

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        const coord = a[i].split(',').map(Number);

        intersections.push(coord);
      }
    }
  }

  return intersections;
}

function main2(wireA, wireB) {
  const a = getVisitedFields(wireA.split(',')).map(String);
  const b = getVisitedFields(wireB.split(',')).map(String);

  const intersections = getIntersections(a, b)
    .filter(Boolean)
    .map(String);

  const aStepsToIntersection = getStepsToIntersection(a, intersections);
  const bStepsToIntersection = getStepsToIntersection(b, intersections);

  const fastestIntersection = {};

  aStepsToIntersection.forEach(x => (fastestIntersection[x[0]] = x[1]));
  bStepsToIntersection.forEach(x => (fastestIntersection[x[0]] += x[1]));

  return Object.values(fastestIntersection)
    .sort((x, y) => x - y)
    .filter(Boolean)[0];
}

function getStepsToIntersection(fields, intersections) {
  return intersections.map(i => {
    const index = fields.findIndex(x => x === i);
    return [
      i,
      fields.slice(0, index).map(x => x.split(',').map(Number)).length
    ];
  });
}

// Test driven development
console.log('\nTest cases for task #1:');
[
  {
    actual: main1('R8,U5,L5,D3', 'U7,R6,D4,L4'),
    expected: 6
  },
  {
    actual: main1(
      'R75,D30,R83,U83,L12,D49,R71,U7,L72',
      'U62,R66,U55,R34,D71,R55,D58,R83'
    ),
    expected: 159
  },
  {
    actual: main1(
      'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
    ),
    expected: 135
  }
].forEach(test => console.log(test.actual === test.expected, '\t', test));

// Test driven development
console.log('\nTest cases for task #1:');
[
  {
    actual: main2('R8,U5,L5,D3', 'U7,R6,D4,L4'),
    expected: 30
  },
  {
    actual: main2(
      'R75,D30,R83,U83,L12,D49,R71,U7,L72',
      'U62,R66,U55,R34,D71,R55,D58,R83'
    ),
    expected: 610
  },
  {
    actual: main2(
      'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
    ),
    expected: 410
  }
].forEach(test => console.log(test.actual === test.expected, '\t', test));

// Print the results of the returned solution
console.log('\nResults:', main1(lines[0], lines[1]), main2(lines[0], lines[1]));
