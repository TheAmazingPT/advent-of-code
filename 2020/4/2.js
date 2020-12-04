const realInput = require('../utils/input')(4, true);
const parseBatchFile = require('./1');

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const optionalFields = ['cid'];

console.log(main(realInput));

function main(input) {
  const passports = parseBatchFile(input);

  const qualifiedPassports = passports.filter(p => {
    return (
      requiredFields.filter(r => Boolean(p[r])).length >= requiredFields.length
    );
  });

  const validPassport = qualifiedPassports.map(passport => {
    const isValid = Object.keys(passport)
      .map(key => {
        const value = passport[key];
        switch (key) {
          case 'byr':
            return Number(value) >= 1920 && Number(value) <= 2002;
          case 'iyr':
            return Number(value) >= 2010 && Number(value) <= 2020;
          case 'eyr':
            return Number(value) >= 2020 && Number(value) <= 2030;
          case 'hgt':
            return checkHeight(value);
          case 'hcl':
            return /\#[0-9a-f]{6}/.test(String(value));
          case 'ecl':
            return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(
              value
            );
          case 'pid':
            return /^[0-9]{9}$/.test(String(value));
          default:
            return true;
        }
      })
      .every(Boolean);

    return {...passport, isValid};
  });

  return validPassport.filter(x => x.isValid).length;
}

function checkHeight(value) {
  const [num, unit] = value.replace(/(cm|in)/g, ',$1').split(',');

  if (!unit) {
    return false;
  }

  return unit === 'cm'
    ? Number(num) >= 150 && Number(num) <= 193
    : Number(num) >= 59 && Number(num) <= 76;
}
