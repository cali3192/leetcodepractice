/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false)
  );
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) continue;
      if (visited[row][col]) continue;
      maxArea = Math.max(dfs(row, col, grid, visited), maxArea);
    }
  }
  return maxArea;
};

const dfs = (row, col, grid, visited) => {
  if (visited[row][col]) return 0;
  visited[row][col] = true;
  let maxArea = 0;
  const neighbors = getNeighbors(row, col, grid, visited);
  for (let neighbor of neighbors) {
    maxArea += dfs(neighbor[0], neighbor[1], grid, visited);
  }
  return grid[row][col] + maxArea;
};

const getNeighbors = (row, col, grid, visited) => {
  const rowC = [0, 0, 1, -1];
  const colC = [1, -1, 0, 0];
  let neighbors = [];
  for (let i = 0; i < 4; i++) {
    let currentRow = row + rowC[i],
      currentCol = col + colC[i];
    if (currentRow >= grid.length || currentCol >= grid[0].length) continue;
    if (currentRow < 0 || currentCol < 0) continue;
    if (visited[currentRow][currentCol]) continue;
    if (grid[currentRow][currentCol] === 0) continue;
    neighbors.push([currentRow, currentCol]);
  }
  return neighbors;
};





