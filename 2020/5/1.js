const realInput = require('../utils/input')(5);

console.log(main(realInput));

function main(input) {
  const seatIds = input.map(convertRowToSeatId);
  return seatIds.sort((x, y) => y - x)[0];
}

function convertRowToSeatId(row) {
  const instructions = Array.from(row);

  const maxRowNumber = 128;
  const maxSeatNumber = 8;

  const x = instructions.reduce(
    (temp, ins, index) => {
      switch (ins) {
        case 'F':
          return {...temp, row: temp.row - maxRowNumber / Math.pow(2, ++index)};
        case 'B':
          return {...temp, row: temp.row};
        case 'L':
          return {
            ...temp,
            seat: temp.seat - maxSeatNumber / Math.pow(2, ++index - 7)
          };
        default:
          return {...temp, seat: temp.seat};
      }
    },
    {row: maxRowNumber, seat: maxSeatNumber}
  );

  x.row = Math.round(x.row) - 1;
  x.seat = Math.round(x.seat) - 1;

  return x.row * 8 + x.seat;
}

module.exports = convertRowToSeatId;
