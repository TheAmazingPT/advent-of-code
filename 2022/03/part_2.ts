import { getLetterValue } from "./part_1.ts";

export function findMutualLetter(strings) {
  const allLetters = {};

  // Clear duplicated letters from string
  strings.map((s) =>
    s.split("").reduce((ns, l) => {
      return ns.includes(l) ? ns : ns + l;
    }, "")
  ).forEach((s) =>
    s.split("").forEach((l) =>
      allLetters[l] = !allLetters[l] ? 1 : allLetters[l] + 1
    )
  );

  return Object.entries(allLetters).sort((a, b) => b[1] - a[1])[0][0];
}

export default async function main(lines: string[]): Promise<any> {
  const groups = [];

  // Split into groups of 3
  for (let i = 0; i < lines.length; i++) {
    if (i % 3 === 0) {
      groups.push([lines[i]]);
    } else {
      const group = groups.at(-1);
      group.push(lines[i]);
    }
  }

  return groups
    .reduce(
      (badges, g) => [...badges, findMutualLetter(g)],
      [],
    )
    .map(getLetterValue)
    .reduce((sum, v) => sum + v, 0);
}
