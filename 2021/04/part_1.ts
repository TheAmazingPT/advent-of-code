interface Board {
  raw: number[];
  hits: number[];
  rows: number[][];
}

export default async function main(lines: string[]): Promise<any> {
  const draws = lines[0].split(",").map(Number);

  let boards: Partial<Board>[] = lines.slice(2).reduce(
    (
      temp: Partial<Board[]>,
      row: string,
      index: number,
    ) => {
      if (!(index % 6)) {
        temp.push({ raw: [] });
      }

      temp[temp.length - 1] = {
        raw: [
          ...temp[temp.length - 1].raw,
          ...row.split(" ").filter(Boolean).map(Number),
        ],
      };

      return temp;
    },
    [],
  );

  boards = boards.map(getRowsAndHits);

  let winningBoard: Board | null = null;

  draws.reduce((bingo: number[], draw: number) => {
    const newBingo = [...bingo, draw];

    const winningBoards = boards.filter((board) => {
      return board.rows.filter((row) =>
        row.filter((n) => newBingo.includes(n)).length === 5
      ).length;
    });

    if (!winningBoard && winningBoards.length) {
      winningBoard = winningBoards[0];
    }

    return newBingo;
  }, []);

  console.log(draws, winningBoard);

  return null;
}

function getRowsAndHits(board: Partial<Board>): Board {
  const rows = [];

  for (let i = 0; i < board.raw.length; i = i + 5) {
    rows.push(board.raw.slice(i, i + 5));
  }

  for (let i = 0; i < rows[0].length; i++) {
    rows.push(rows.map((r) => r[i]));
  }

  return { ...board, rows, hits: [] };
}
