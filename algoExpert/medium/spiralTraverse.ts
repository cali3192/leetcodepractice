function spiralTraverse(array: number[][]) {
  // Write your code here.

  // this array is a matrix...
  const matrix = array;

  let result = [];

  let rowStart = 0,
    rowEnd = matrix.length - 1,
    colStart = 0,
    colEnd = matrix[0].length - 1;

  while (rowStart < rowEnd && colStart < colEnd) {
    let permiter = getPerimeter(rowStart, rowEnd, colStart, colEnd, matrix);

    result = [...result, ...permiter];

    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }

  return result;
}

// matrix[row][col]

const getPerimeter = (
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
  matrix: number[][]
) => {
  let permiter = [];

  // loop through first row
  const firstRow = matrix[rowStart].slice(colStart, colEnd + 1);
  permiter = [...firstRow];

  // get right col, row index = rowEnd
  for (let i = rowStart + 1; i <= rowEnd; i++) {
    const num = matrix[i][colEnd];
    permiter.push(num);
  }

  // get last row
  for (let col = colEnd - 1; col >= colStart; col--) {
    // handles edge case
    if (colStart === colEnd) break;

    const num = matrix[rowEnd][col];
    permiter.push(num);
  }

  // get the left col
  for (let row = rowEnd - 1; row > rowStart; row--) {
    if (rowStart === rowEnd) break;

    const num = matrix[row][colStart];
    permiter.push(num);
  }

  return permiter;
};

const testMatrix = [
  [1, 2, 3, 4, 5],
  [14, 15, 16, 17, 6],
  [13, 20, 19, 18, 7],
  [12, 11, 10, 9, 8],
];

// testing permiter
// const actualPermiter = getPerimeter(1, 2, 1, 3, testMatrix);

// console.log(`LOG: `, { actualPermiter });

const actualSpiralTraverse = spiralTraverse(testMatrix);
console.log("LOG ~ ACTUAL ->", actualSpiralTraverse);
