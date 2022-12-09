export function getAssignments(lines: string[]) {
  return lines.map((l) =>
    l.split(",").map((s) => s.split("-").map((n) => Number(n)))
  );
}

export default async function main(lines: string[]): Promise<any> {
  const assignments = getAssignments(lines);

  const fullyContainedAssignments = assignments.filter((l) =>
    (l[0][0] <= l[1][0] && l[0][1] >= l[1][1]) ||
    (l[0][0] >= l[1][0] && l[0][1] <= l[1][1])
  );

  return fullyContainedAssignments.length;
}
