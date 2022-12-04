export default async function main(lines: string[]): Promise<any> {
  const compartments = lines.map((l) => {
    const compartment_1 = l.slice(0, l.length / 2);
    const compartment_2 = l.slice(l.length / 2);

    // Try to find a duplicated letter in compartment 1
    // with letters from compartment 2
    const mutualItem = compartment_1.split("").find((i) =>
      compartment_2.split("").find((j) => j === i)
    );

    return getLetterValue(mutualItem);
  });

  return compartments.reduce((sum, v) => sum + v, 0);
}

// "a" starts has CharCode 97 but shall habe value 1
// "A" starts has CharCode 65 but shall habe value 27
export function getLetterValue(letter) {
  const value = letter.charCodeAt(0);
  return value < 97 ? value - 38 : value - 96;
}
