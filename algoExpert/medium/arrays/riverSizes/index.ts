export function riverSizes(matrix: number[][]) {
  // Write your code here.
  const riverSizes: number[] = [];
  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // loop thorugh grid
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const element = matrix[0][j];

      // set counter
      let count = 0;

      if (!isRiver(element)) {
        continue;
      }

      count++;
      // DFS(conuter, matrix, rowIdx, colIdx)
      search(i, j, matrix, moves, riverSizes);
    }
  }

  return riverSizes;
  // return [-1];
}

// DFS
const search = function (
  row: number,
  col: number,
  grid: number[][],
  moves: number[][],
  count: number[]
) {
  // if out of bounds - return
  if (!isInBounds(row, col, grid)) {
    return;
  }

  let currentRiverSize = 0;
  // if on water (0) or we've already visted this spot (+) - return
  if (grid[row][col] === 0 || grid[row][col] === -1) {
    return;
  }

  currentRiverSize++;

  //
  grid = updateToSeen(row, col, grid);

  count.push(currentRiverSize);

  moves.forEach((move) =>
    search(row + move[0], col + move[1], grid, moves, count)
  );
};

const isRiver = (elem: number): boolean => {
  return elem === 1;
};

const isInBounds = (rowIdx: number, colIdx: number, matrix: number[][]) => {
  const maxRow = matrix.length;
  const maxCol = matrix[0].length;

  // check for bounds
  return 0 <= rowIdx && rowIdx <= maxRow && 0 <= colIdx && colIdx <= maxCol;
};

// checks to see if elem has been visited
const haveSeen = (elem: number): boolean => {
  return elem === -1;
};

// if now update seen elems to -1
const updateToSeen = (
  rowIdx: number,
  colIdx: number,
  matrix: number[][]
): number[][] => {
  matrix[rowIdx][colIdx] = -1;
  return matrix;
};
