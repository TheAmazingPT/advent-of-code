const realInput = require('../utils/input')(6, true);
const compileGroups = require('./utils');

console.log(main(realInput));

function main(input) {
  const groups = compileGroups(input);

  const uniqueAnswers = groups.map(group => {
    const members = group.length;
    const answers = {};

    Array.from(group.join('')).forEach(answer => {
      answers[answer] = answers[answer] ? answers[answer] + 1 : 1;
    });

    return Object.keys(answers).filter(a => answers[a] === members).length;
  });

  return uniqueAnswers.reduce((temp, group) => (temp += group), 0);
}
