module.exports = function compileGroups(input) {
  return input.reduce(
    (temp, person) => {
      if (person.length) {
        temp[temp.length - 1].push(person);
        return temp;
      }

      return [...temp, []];
    },
    [[]]
  );
};
