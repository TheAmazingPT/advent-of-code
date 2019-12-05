import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, 'input.txt');
const inputRaw = fs.readFileSync(inputPath, 'utf8');
const input = inputRaw.split('\n').filter(x => Boolean(x.trim()));

const claims = input.map(x => {
  const split1 = x.split('@');
  const split2 = split1[1].split(':');

  const id = split1[0].trim();
  const left = Number(split2[0].split(',')[0].trim());
  const top = Number(split2[0].split(',')[1].trim());
  const width = Number(split2[1].split('x')[0].trim());
  const height = Number(split2[1].split('x')[1].trim());

  return {
    id,
    left,
    top,
    width,
    height
  };
});

const fields = {};
const claimFields = {};

function countFieldHits(claim) {
  Array(claim.width)
    .fill()
    .forEach((x, xi) => {
      Array(claim.height)
        .fill()
        .forEach((y, yi) => {
          const coord = `${claim.left + xi}_${claim.top + yi}`;

          fields[coord] = fields[coord] ? ++fields[coord] : 1;
          claimFields[claim.id] = claimFields[claim.id]
            ? [...claimFields[claim.id], coord]
            : [coord];
        });
    });
}

claims.forEach(countFieldHits);

const unique = Object.keys(claimFields).filter(x =>
  claimFields[x].every(y => fields[y] === 1)
)[0];

console.log(unique);
