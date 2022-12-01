export default function main(lines: string[], slicer): Promise<any> {
  const elves = lines.reduce((temp, item) => {
    if (!temp.at(-1) || !item) {
      temp.push(Number(item));
    } else {
      temp[temp.length - 1] += Number(item);
    }

    return temp;
  }, []);

  return elves.sort().reverse().slice(0, slicer);
}
