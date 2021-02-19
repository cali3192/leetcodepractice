var findCircleNum = function (m: number[][]) {
  let groups = 0;

  // looping through each elem in matrix
  for (let row = 0; row < m.length; row++) {
    for (let col = 0; col < m[row].length; col++) {
      // if we find a city, increment group
      if (m[row][col] === 1) {
        groups++;
        //
        traverse(m, row, col);
      }
    }
  }
  return groups;
};

function traverse(m: number[][], r: number, c: number) {
  if (m[r][c] !== 1) return;
  m[r][c] = 0;

  let row = c;
  for (let col = 0; col < m[row].length; col++) {
    if (m[row][col] === 1) {
      traverse(m, row, col);
    }
  }
}
