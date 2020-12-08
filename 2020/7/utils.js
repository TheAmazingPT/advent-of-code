function cleanBagName(name) {
  return name.match(/(\D*\s*\w*)(?= bag)/g)[0].trim();
}

exports.getBagStructures = function getBagRules(input) {
  return input.reduce((temp, line) => {
    const map = line.split(' contain ');

    const bag = cleanBagName(map[0]);
    const content = map[1].split(',').reduce((items, item) => {
      const cleanItem = item.trim().replace(/\./g, '');

      const count = cleanItem.match(/\d/g)
        ? Number(cleanItem.match(/\d/g)[0])
        : null;

      return count ? {...items, [cleanBagName(cleanItem)]: count} : null;
    }, {});

    return {...temp, [bag]: content};
  }, {});
};

exports.getContents = function getContents(structures, content) {
  if (!content) {
    return null;
  }

  return Object.entries(content).reduce((temp, bag) => {
    const newTemp = {...temp};
    const [name, count] = bag;

    // This means the bag has no bags inside and therefore no structure
    if (!structures[name]) {
      newTemp[name] = count;
    } else {
      const newContents = getContents(structures, structures[name]);
      Object.entries(newContents).forEach(([n, c]) => {
        const product = count * c;
        newTemp[n] = newTemp[n] ? newTemp[n] + product : product;
      });
    }

    return newTemp;
  }, content);
};
