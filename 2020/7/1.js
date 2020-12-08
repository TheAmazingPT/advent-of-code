const realInput = require('../utils/input')(7);
const {getBagStructures, getContents} = require('./utils');

console.log(main(realInput));

function main(input) {
  const structures = getBagStructures(input);

  const bags = Object.keys(structures).reduce((newBags, name) => {
    return {
      ...newBags,
      [name]: getContents(structures, {...structures[name]})
    };
  }, {});

  return Object.values(bags).filter(
    content => content && Object.keys(content).includes('shiny gold')
  ).length;
}
