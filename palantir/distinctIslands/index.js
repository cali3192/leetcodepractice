/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  // define moves and label
  const moves = [
    [1, 0, "U"],
    [-1, 0, "D"],
    [0, 1, "R"],
    [0, -1, "L"],
  ];

  // tracking distinct islands
  const set = new Set();

  // loop through matrix
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      // if you're at an island
      if (!!grid[r][c] && grid[r][c] !== "+") {
        // get the island by calling dfs
        const island = dfs({ grid, r, c, pos: "#", moves });

        // add the island to our set
        set.add(island);
        console.log(`LOG: SET `, { set });
      }
    }
  }

  // return teh set size which will be the num of distinct islands
  return set.size;
};

//DFS
function dfs({ grid, r, c, pos, moves }) {
  console.log(`\n inside DFS`, { grid });

  // checking for bounds
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[r].length ||
    grid[r][c] === 0
  ) {
    // return an indicator noting
    return "*";
  }

  // update curr position "seen"
  grid[r][c] = "+";

  // go through neighbors and call dfs on island lands
  moves.forEach((move) => {
    pos += dfs({ grid, r: r + move[0], c: c + move[1], pos: move[2], moves });
  });

  return pos;
}
