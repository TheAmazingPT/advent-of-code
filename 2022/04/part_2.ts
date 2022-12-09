import { getAssignments } from "./part_1.ts";

export default async function main(lines: string[]): Promise<any> {
  const assignments = getAssignments(lines);

  const overlappingAssignments = assignments.filter((l) => {
    const a = l[0][0];
    const b = l[0][1];
    const c = l[1][0];
    const d = l[1][1];

    return ((a <= c && a <= d) && (b >= c && b <= d)) ||
      ((a >= c && a <= d) && (b >= c && b >= d)) ||
      ((a <= c && a <= d) && (b >= c && b >= d)) ||
      ((a >= c && a <= d) && (b >= c && b <= d));
  });

  return overlappingAssignments.length;
}
