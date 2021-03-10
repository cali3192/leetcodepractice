// LeetCode #200
var numIslands = function (grid) {
  let numOfIslands = 0;

  // represents the up, left, down, right checks
  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // iterate through the grid
  for (let i = 0; i < grid.length; i++) {
    // each square
    for (let k = 0; k < grid[i].length; k++) {
      // if you find a 1
      if (grid[i][k] === "1") {
        // increase our island count and depth first search through the grid to find all its connecting land
        numOfIslands++;
        search(grid, i, k, moves);
      }
    }
  }
  return numOfIslands;
};

// update the spot as visited and traverse in all directions

// DFS helper method
var search = function (grid, row, col, moves) {
  // if out of bounds - return
  if (!inBounds(grid, row, col) || grid[row][col] !== "1") {
    return;
  }

  grid[row][col] = "+";

  // go through each move
  moves.forEach((move) => search(grid, row + move[0], col + move[1], moves));
};

// helper to check if spot is in bounds
var inBounds = function (grid, row, col) {
  return row > -1 && row < grid.length && col > -1 && col < grid[0].length;
};
