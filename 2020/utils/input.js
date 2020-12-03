const fs = require('fs');
const path = require('path');

// Fetch the input data
module.exports = (day, allowEmptyLines = false, file = 'input') => {
  return fs
    .readFileSync(path.resolve(__dirname, '..', String(day), file), 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => allowEmptyLines || l.length);
};
