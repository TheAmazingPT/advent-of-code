const realInput = require('../utils/input')(5);
const convertRowToSeatId = require('./1');

console.log(main(realInput));

function main(input) {
  const seatIds = input.map(convertRowToSeatId);
  const offset = seatIds.sort((x, y) => x - y)[0];

  const mySeat = Array(seatIds.length + offset)
    .fill(null)
    .map((x, index) => (seatIds.includes(index) ? null : index))
    .slice(offset);

  return mySeat.filter(Boolean)[0];
}
