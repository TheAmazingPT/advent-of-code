export default async function main(lines: string[]): Promise<any> {
  let increasedCount = 0;

  lines.map((l) => Number(l)).reduce((prev: number, curr: number) => {
    curr > prev && increasedCount++;
    return curr;
  }, Infinity);

  return increasedCount;
}
