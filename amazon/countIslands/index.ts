// LeetCode #200
var numIslands = function (grid: string[][]) {
  let numOfIslands = 0;
  const MOVES = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // iterate through the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if you find a 1
      if (grid[i][j] === "1") {
        // increase our island count and depth first search through the grid to find all its connecting land
        numOfIslands++;
        search(grid, i, j, MOVES);
      }
    }
  }
  return numOfIslands;
};

// DFS helper method
var search = function (
  grid: string[][],
  row: number,
  col: number,
  MOVES: number[][]
) {
  // if out of bounds - return
  if (!inBounds(grid, row, col) || grid[row][col] !== "1") {
    return;
  }

  // update the spot as visited and traverse in all directions
  grid[row][col] = "+";
  MOVES.forEach((move: number[]) =>
    search(grid, row + move[0], col + move[1], MOVES)
  );
};

// helper to check if spot is in bounds
var inBounds = function (grid: string[][], row: number, col: number) {
  return row > -1 && row < grid.length && col > -1 && col < grid[0].length;
};
