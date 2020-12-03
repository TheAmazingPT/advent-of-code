const inputReal = require('../utils/input')(2);
const inputTest = require('../utils/input-test-1')(2);

console.log(main(inputReal));
console.log(main(inputTest));

function main(input) {
  const pwmap = input.map(x => {
    const [options, password] = x.split(': ');
    const [min, max, char] = options.replace(/\W/g, ':').split(':');

    return {options: {min: Number(min), max: Number(max), char}, password};
  });

  return pwmap.filter(x => {
    const count = Array.from(x.password).filter(y => y === x.options.char)
      .length;

    return count >= x.options.min && count <= x.options.max;
  }).length;
}
