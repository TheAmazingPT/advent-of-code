export default async function main(lines: string[]): Promise<any> {
  const stats: { [_: string]: { [_: number]: number } } = {
    "0": {},
    "1": {},
  };

  lines.forEach((l: string) =>
    [...l].forEach((bit: string, index: number) => {
      stats[bit][index] ? stats[bit][index]++ : stats[bit][index] = 1;
    })
  );

  const gamma = parseInt(
    Object.values(stats["0"]).map((count: number, index) => {
      return count > stats["1"][index] ? 0 : 1;
    }).join(""),
    2,
  );

  const epsilon = parseInt(
    Object.values(stats["0"]).map((count: number, index) => {
      return count < stats["1"][index] ? 0 : 1;
    }).join(""),
    2,
  );

  return gamma * epsilon;
}
