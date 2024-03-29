export default async function main(lines: string[]): Promise<any> {
  const points = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };

  return lines.reduce((score, game) => {
    return score + points[game];
  }, 0);
}
