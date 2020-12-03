const input = require('../utils/input')(3);

console.log(main(input, 3, 1));

function main(input, moveX, moveY) {
  let posX = moveX * -1;

  const linesWithTrees = input
    .filter((line, index) => index % moveY === 0)
    .map(line => Array.from(line))
    .map(line => {
      const newPosX = posX + moveX;
      posX = newPosX >= line.length ? newPosX - line.length : newPosX;

      line[posX] = line[posX] === '#' ? 'X' : 'O';

      // console.log(line.join(''), line[posX] === 'X');

      return line[posX] === 'X';
    })
    .filter(Boolean);

  return linesWithTrees.length;
}

module.exports = main;
