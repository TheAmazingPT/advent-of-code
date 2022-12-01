export default function main(calories: number[]): Promise<any> {
  return calories.reduce((t, i) => t + i, 0);
}
