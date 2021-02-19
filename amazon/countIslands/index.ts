// LeetCode #200
var numIslands = function(grid) {
  let numOfIslands = 0;
  const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  // iterate through the grid
  for (let i = 0; i < grid.length; i++) {
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

// DFS helper method
var search = function(grid, row, col, moves) {
  // if out of bounds - return
  if (!inBounds(grid, row, col)) {
    return;
  }
  // if on water (0) or we've already visted this spot (+) - return
  if (grid[row][col] === '0' || grid[row][col] === '+') {
    return;
  }
  // update the spot as visited and traverse in all directions
  grid[row][col] = '+';
  moves.forEach(move => search(grid, row + move[0], col + move[1], moves));
}

// helper to check if spot is in bounds
var inBounds = function(grid, row, col) {
  return (
    row > -1
    && row < grid.length
    && col > -1
    && col < grid[0].length
  );
}


















