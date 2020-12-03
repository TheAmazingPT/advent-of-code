const inputReal = require('../utils/input')(1);
const inputTest = require('../utils/input-test-2')(1);

console.log(main(inputReal));
console.log(main(inputTest));

function main(input) {
  const numbers = input.map(Number);

  return numbers
    .map(i => {
      const x = numbers
        .map(j => {
          const y = numbers
            .map(h => (i + j + h === 2020 ? [i, j, h] : null))
            .filter(Boolean);
          return y.length ? y[0] : null;
        })
        .filter(Boolean);

      return x.length ? x[0][0] * x[0][1] * x[0][2] : null;
    })
    .filter(Boolean);
}
