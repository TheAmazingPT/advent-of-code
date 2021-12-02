export default async function main(lines: string[]): Promise<any> {
  let increasedCount = 0;
  let clusters: number[] = [];

  lines.map((l) => Number(l)).forEach((
    height: number,
    index: number,
    heights: number[],
  ) => {
    if (heights[index + 1] && heights[index + 2]) {
      clusters.push(height + heights[index + 1] + heights[index + 2]);
    }
  });

  clusters.reduce((prev: number, curr: number) => {
    curr > prev && increasedCount++;
    return curr;
  }, Infinity);

  return increasedCount;
}
