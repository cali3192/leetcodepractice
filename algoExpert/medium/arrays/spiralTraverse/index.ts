export function spiralTraverse(array: number[][]) {
  // Write your code here.
  // this array is a matrix...
  const matrix = array;

  // deine our result
  let result: number[] = [];

  // edge case
  if (array.length === 1) return array[0];

  // define our initial pointers at the corners of the matrix
  let rowStart = 0,
    rowEnd = matrix.length - 1,
    colStart = 0,
    colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // helper to get perimeter values
    let perimeter = getPerimeter(rowStart, rowEnd, colStart, colEnd, matrix);

    result = [...result, ...perimeter];

    // move our corners in for inner perimeters
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }

  return result;
}

const getPerimeter = (
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
  matrix: number[][]
) => {
  let perimeter = [];

  console.log({ rowStart, rowEnd, colStart, colEnd });

  // loop through first row
  const firstRow = matrix[rowStart].slice(colStart, colEnd + 1);
  perimeter = [...firstRow];

  // get right col, row index = rowEnd
  for (let i = rowStart + 1; i <= rowEnd; i++) {
    const num = matrix[i][colEnd];
    perimeter.push(num);
  }

  // get last row
  for (let col = colEnd - 1; col >= colStart; col--) {
    // handles edge case where you can get a repeating last row
    if (colStart === colEnd || rowStart === rowEnd) break;

    const num = matrix[rowEnd][col];
    perimeter.push(num);
  }

  // get the left col
  for (let row = rowEnd - 1; row > rowStart; row--) {
    // handles edge case so you don't get repeating last col
    if (rowStart === rowEnd || colStart === colEnd) break;

    const num = matrix[row][colStart];
    perimeter.push(num);
  }

  return perimeter;
};
