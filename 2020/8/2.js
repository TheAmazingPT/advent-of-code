const realInput = require('../utils/input')(8);

console.log(
  main(
    `
nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
`
      .split('\n')
      .map(x => x.trim())
      .filter(Boolean)
  )
);

// console.log(main(realInput));

function main(input) {
  const instructions = input
    .map(i => i.split(' '))
    .map(i => [i[0], Number(i[1])]);

  return run(instructions, 0, 0, []);
}

function run(instructions, step, acc, visited) {
  const command = instructions[step];

  if (!command) {
    return acc;
  }

  const nextStep = step + (command[0] === 'jmp' ? command[1] : 1);

  console.log(
    step,
    command[0],
    '\t',
    command[1],
    '\t',
    nextStep,
    '\t',
    visited.join('')
  );

  if (command[0] !== 'acc' && visited.includes(nextStep)) {
    const newInstructions = fixInstructions(instructions, step);
    return run(newInstructions, step, acc, visited);
  }

  switch (command[0]) {
    case 'jmp':
      return run(instructions, step + command[1], acc, [...visited, step]);

    case 'acc':
      return run(instructions, step + 1, acc + command[1], [...visited, step]);

    default:
      return run(instructions, step + 1, acc, [...visited, step]);
  }
}

function fixInstructions(instructions, step) {
  const command = instructions[step];
  const newInstructions = [...instructions];
  newInstructions[step] = [command[0] === 'nop' ? 'jmp' : 'nop', command[1]];
  return newInstructions;
}
