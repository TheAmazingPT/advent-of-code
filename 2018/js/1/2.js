import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, 'input.txt');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

const allFreqs = [0];

getFreq(0, input);

function getFreq(initialFreq, values) {
  return values.reduce(getNewFreq, initialFreq);
}

function getNewFreq(freq, val, index, inputArray) {
  const newFreq = freq + Number(val);

  if (allFreqs.includes(newFreq)) {
    console.log('duplicate', newFreq);
    process.exit();
  } else {
    allFreqs.push(newFreq);

    if (index + 1 === inputArray.length) {
      getFreq(newFreq, input);
    } else {
      return newFreq;
    }
  }
}
