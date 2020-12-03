const input = require('../utils/input')(3);

const treeFinder = require('./1');

console.log(main(input));

function main(input) {
  const result =
    treeFinder(input, 1, 1) *
    treeFinder(input, 3, 1) *
    treeFinder(input, 5, 1) *
    treeFinder(input, 7, 1) *
    treeFinder(input, 1, 2);

  return result;
}
