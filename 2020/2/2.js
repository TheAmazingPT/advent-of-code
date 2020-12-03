const inputReal = require('../utils/input')(2);

console.log(main(inputReal));

function main(input) {
  const pwmap = input.map(x => {
    const [options, password] = x.split(': ');
    const [first, second, char] = options.replace(/\W/g, ':').split(':');

    return {
      options: {first: Number(first), second: Number(second), char},
      password
    };
  });

  return pwmap.filter(x => {
    const pass = Array.from(x.password);
    const first = x.options.first - 1;
    const second = x.options.second - 1;

    return (
      (pass[first] === x.options.char && pass[second] !== x.options.char) ||
      (pass[first] !== x.options.char && pass[second] === x.options.char)
    );
  }).length;
}
