export default async function main(lines: string[]): Promise<any> {
  const results = lines.reduce((temp: any, move: string) => {
    const dir = move.split(" ")[0];
    const distance = Number(move.split(" ")[1]);

    switch (dir) {
      case "down":
        temp.depth += distance;
        break;
      case "up":
        temp.depth -= distance;
        break;
      default:
        temp.distance += distance;
    }

    return temp;
  }, { depth: 0, distance: 0 });

  return results.depth * results.distance;
}
