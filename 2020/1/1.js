const inputReal = require('../utils/input')(1);

console.log(main(inputReal));

function main(input) {
  const numbers = input.map(Number);
  return numbers
    .map(i => {
      const x = numbers.filter(j => (i + j === 2020 ? j : false));
      return x.length ? x[0] * i : null;
    })
    .filter(Boolean);
}
