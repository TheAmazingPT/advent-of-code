import part_1 from "./part_1.ts";

export default async function main(lines: string[]): Promise<any> {
  const winner = {
    "A X": "A Z",
    "A Y": "A X",
    "A Z": "A Y",
    "B X": "B X",
    "B Y": "B Y",
    "B Z": "B Z",
    "C X": "C Y",
    "C Y": "C Z",
    "C Z": "C X",
  };

  const games = lines.map((g) => winner[g]);

  return part_1(games);
}
