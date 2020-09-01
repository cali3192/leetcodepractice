/**
 * 36. Valid Sudoku
 * @param {*} array
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 *
 */

// const createSodokuBoard = () => {
//   let i = 1;
//   const board = {};
//   while (i < 10) {
//     board[i] = 0;
//     i++;
//   }

//   return board;
// };

const isValidPiece = (element) => {
  return element !== "" && element !== ".";
};

const constructRow = (rowIndex, board) => {
  const array = board[rowIndex];
  return array.filter((elem) => isValidPiece(elem));
};

const constructColumn = (rowIndex, board) => {
  let colIndex = 0;

  let column = [];

  while (colIndex < 9) {
    const element = board[colIndex][rowIndex];
    if (isValidPiece(element)) {
      column.push(element);
    }
    colIndex++;
  }

  return column;
};

/**
 * Solution 1: validLine
 *
 */
// const validLine = (array) => {
//   const boardLine = createSodokuBoard();

//   for (let i = 0; i < array.length; i++) {
//     const number = array[i];
//     boardLine[number]++;
//     if (boardLine[number] > 1) {
//       return false;
//     }
//   }

//   return true;
// };

/**
 * Solution 2: using sets instead of object
 *
 */
const validLine = (array) => {
  const set = new Set(array);

  return set.size === array.length;
};

const constructMatrix = (rowIndexTop, colIndexTop, board) => {
  const matrixArr = [];

  for (let rowIndex = rowIndexTop; rowIndex < rowIndexTop + 3; rowIndex++) {
    for (let colIndex = colIndexTop; colIndex < colIndexTop + 3; colIndex++) {
      const element = board[rowIndex][colIndex];
      if (isValidPiece(element)) {
        matrixArr.push(element);
      }
    }
  }

  return matrixArr;
};

/**
 ** Solution 1: CheckCols and Rows then check matrix
 * Runtime:
 * 92 ms, faster than 88.52% of JavaScript online submissions for Valid Sudoku.
 *
 * Memory Usage:
 * 39.5 MB, less than 66.12% of JavaScript online submissions for Valid Sudoku.
 *
 *
 ** Solution 2: Using set for isValid check
 * Runtime:
 * 96 ms, faster than 80.64% of JavaScript online submissions for Valid Sudoku.
 *
 * Memory Usage:
 * 38.8 MB, less than 88.11% of JavaScript online submissions for Valid Sudoku.
 *
 */
const isValidSudoku = (board) => {
  // are rows and cols value valid
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    const row = constructRow(rowIndex, board);
    const cols = constructColumn(rowIndex, board);

    if (!validLine(row) || !validLine(cols)) {
      return false;
    }
  }

  // checking to see if matrix are valid
  for (let rowIndex = 0; rowIndex < 9; rowIndex += 3) {
    for (let colIndex = 0; colIndex < 9; colIndex += 3) {
      const matrix = constructMatrix(rowIndex, colIndex, board);
      if (!validLine(matrix)) {
        return false;
      }
    }
  }
  return true;
};

const validBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const invalidBoard = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const testValidSodoku = isValidSudoku(validBoard);
const testInvalidSodoku = isValidSudoku(invalidBoard);

console.log("LOG: ", {
  testValidSodoku,
  testInvalidSodoku,
});

// console.log(testValidSodoku);
