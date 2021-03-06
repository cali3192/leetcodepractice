/**
 * 221. Maximal Square
 *
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 * @param {*} matrix
 */

function maximalSquare(matrix) {
  // define result
  let result = 0;

  // loop through matrix
  for (let rIndex = 0; rIndex < matrix.length; rIndex++) {
    for (let cIndex = 0; cIndex < matrix[0].length; cIndex++) {
      const element = matrix[rIndex][cIndex];

      // if 1 is found
      if (element === "1") {
        // look around and look for squares
        const currSquareSize = traverseMatrix(rIndex, cIndex, matrix);

        // update result
        result = Math.max(result, currSquareSize);
      }
    }
  }

  // return square area
  return result ** 2;
}

// traverse function(rIndex, col, matrix)
const traverseMatrix = (rIndex, cIndex, matrix) => {
  // set squareSize = 1
  let squareSize = 0;

  // while in bounds and square of "1"s
  while (checkSquare(rIndex, cIndex, matrix, squareSize)) {
    // increment squareSize
    squareSize++;
  }

  return squareSize;
};

// define function to check for 1s square (index, squareSize, matrix)
const checkSquare = (rIndex, cIndex, matrix, size) => {
  // get rows
  let rows = matrix.slice(rIndex, rIndex + size + 1);

  // get submatrix size * size
  let subMatrix = rows.map((row) => {
    return row.slice(cIndex, cIndex + size + 1);
  });

  // if out of bounds or subMatrix is not a square
  if (
    rIndex + size >= matrix.length ||
    cIndex + size >= matrix[0].length ||
    subMatrix.length !== subMatrix[0].length
  ) {
    return false;
  }

  // loop through subMatrix
  for (let subRow of subMatrix) {
    for (let elem of subRow) {
      // if elem isn't 1, return
      if (elem !== "1") return false;
    }
  }
  return true;
};

// // Dynamic Approach
// function maximalSquare(matrix) {
//   if (matrix == null || matrix.length === 0) return 0;

//   const h = matrix.length;
//   const w = matrix[0].length;

//   // init 2d sizes to 0
//   const dp = [];
//   for (let i = 0; i < h; i++) {
//     const row = [];
//     for (let j = 0; j < w; j++) row.push(0);
//     dp.push(row);
//   }

//   let max = 0;

//   for (let j = 0; j < w; j++) {
//     dp[0][j] = Number(matrix[0][j]);
//     max = Math.max(max, dp[0][j]);
//   }

//   for (let i = 0; i < h; i++) {
//     dp[i][0] = Number(matrix[i][0]);
//     max = Math.max(max, dp[i][0]);
//   }

//   for (let i = 1; i < h; i++) {
//     for (let j = 1; j < w; j++) {
//       if (matrix[i][j] === "1") {
//         dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
//         max = Math.max(max, dp[i][j]);
//       }
//     }
//   }

//   return max * max;
// }

function maximalSquare(matrix) {
  // set currentSquareSize = 0
  let maxSquare = 0;
  // loop thorugh
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const currSquareSize = getSquareSize(i, j, matrix);

      maxSquare = Math.max(maxSquare, currSquareSize);
    }
  }

  // look for 1s
  // call helper(i, j, matrix) which will return the area
}

const getSquareSize = (i, j, matrix) => {
  // we start with a square of size 1
  let squareSize = 1;

  // helper to check if we have a square
  // if yes, increase square size

  // return squareSize
};

const isSquare = (i, j, matrix) => {
  while (i < matrix.length) {
    while (j < matrix[i].length) {
      if (matrix[i][j] !== "1") return false;
    }
  }

  i++;
  j++;
  return true;
};
