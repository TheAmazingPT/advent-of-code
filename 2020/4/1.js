const realInput = require('../utils/input')(4, true);

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const optionalFields = ['cid'];

console.log(main(realInput));

function main(input) {
  const passports = parseBatchFile(input);

  const validPassports = passports.filter(passport => {
    const existingFields = requiredFields.filter(r => Boolean(passport[r]));
    return existingFields.length >= requiredFields.length;
  });

  return validPassports.length;
}

function parseBatchFile(input) {
  return input
    .map(x => (x === '' ? '|' : x))
    .join(',')
    .split('|')
    .filter(Boolean)
    .map(x => x.replace(/\,/g, ' ').trim().split(' '))
    .map(x =>
      x.reduce((y, z) => {
        const [key, value] = z.split(':');
        return {...y, [key]: value};
      }, [])
    );
}

module.exports = parseBatchFile;
