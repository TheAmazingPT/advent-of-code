const input = require('./input');

// Fetch the test input data
module.exports = (day, allowEmptyLines = false) =>
  input(day, allowEmptyLines, 'input-test-2');
