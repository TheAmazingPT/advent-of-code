const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');

function main() {
  const cleanInput = input
    .split('\n')
    .filter(x => x != '')
    .map(Number);

  const totalFuel = cleanInput
    .map((x) => recv(0, x))
    .reduce((tmp, x) => tmp + x, 0);

  console.log({totalFuel, fuelReqs: recv(0, totalFuel)});
}

function recv(tmp, x) {
  const xFuel = getFuel(x);
  const newTmp = tmp + xFuel;
  return getFuel(xFuel) > 0 ? recv(newTmp, xFuel) : newTmp;
}

function getFuel(x) {
  return Math.floor((x / 3) - 2);
}

console.log(recv(0, 14))
console.log(recv(0, 1969))
console.log(recv(0, 100756))

main();
