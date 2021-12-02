export default async function main(lines: string[]): Promise<any> {
  const results = lines.reduce((temp: any, move: string) => {
    const dir = move.split(" ")[0];
    const distance = Number(move.split(" ")[1]);

    switch (dir) {
      case "down":
        temp.aim += distance;
        break;
      case "up":
        temp.aim -= distance;
        break;
      default:
        temp.distance += distance;
        temp.depth += distance * temp.aim;
    }

    return temp;
  }, { depth: 0, distance: 0, aim: 0 });

  return results.depth * results.distance;
}
