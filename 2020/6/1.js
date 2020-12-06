const realInput = require('../utils/input')(6, true);
const compileGroups = require('./utils');

console.log(main(realInput));

function main(input) {
  const groups = compileGroups(input);

  const uniqueAnswers = groups.map(group => {
    const answers = {};
    Array.from(group.join('')).forEach(answer => (answers[answer] = true));

    return Object.keys(answers).length;
  });

  return uniqueAnswers.reduce((temp, group) => (temp += group), 0);
}
