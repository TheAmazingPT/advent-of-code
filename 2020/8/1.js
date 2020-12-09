const realInput = require('../utils/input')(8);
// const helper = require('./utils');

console.log(main(realInput));

function main(input) {
  const instructions = input
    .map(i => i.split(' '))
    .map(i => [i[0], Number(i[1])]);

  return run(instructions, 0, 0, []);
}

function run(instructions, step, acc, visited) {
  if (visited.includes(step)) {
    return acc;
  }

  const command = instructions[step];

  switch (command[0]) {
    case 'jmp':
      return run(instructions, step + command[1], acc, [...visited, step]);

    case 'acc':
      return run(instructions, step + 1, acc + command[1], [...visited, step]);

    default:
      return run(instructions, step + 1, acc, [...visited, step]);
  }
}
