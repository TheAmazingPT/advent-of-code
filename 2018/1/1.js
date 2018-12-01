import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, 'input.txt');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

console.log(getFreq(0, input));

function getFreq(initialFreq, values) {
  return values.reduce(getNewFreq, initialFreq);
}

function getNewFreq(freq, val) {
  return freq + Number(val);
}
