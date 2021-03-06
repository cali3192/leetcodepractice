var findCircleNum = function (m: number[][]) {
  let groups = 0;

  // looping through each elem in matrix
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      // if we find a city, increment group
      if (m[i][j] === 1) {
        groups++;

        // DFS
        traverse(m, i, j);
      }
    }
  }
  return groups;
};

function traverse(matrix: number[][], i: number, j: number) {
  if (matrix[i][j] !== 1) return;

  // update to 0 bc to mark as "seen"
  matrix[i][j] = 0;

  let row = j;

  console.log(matrix[row]);

  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === 1) {
      traverse(matrix, row, col);
    }
  }
}

var findCircleNum = function (m: number[][]) {
  let groups = 0;

  // looping through each elem in matrix
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      // if we find a city, increment group
      if (m[i][j] === 1) {
        groups++;

        // DFS
        traverse(m, i, j);
      }
    }
  }
  return groups;
};

function traverse(matrix: number[][], i: number, j: number) {
  if (matrix[i][j] !== 1) return;

  // update to 0 bc to mark as "seen"
  matrix[i][j] = 0;

  let row = j;

  console.log(``, { row }, matrix[row]);

  for (let col = 0; col < matrix[row].length; col++) {
    traverse(matrix, row, col);
  }
}
