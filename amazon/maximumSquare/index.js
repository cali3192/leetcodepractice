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

// Top-Down Approach
// Recursion and memoization
var maximalSquare = function (matrix) {
  // check to see if matrix exists
  if (matrix.length == 0 || matrix[0].length == 0) return 0;

  // define height and width
  let height = matrix.length,
    width = matrix[0].length;

  // construct storage matrix
  const memo = new Array(height).fill(0).map(() => new Array(width).fill(0));

  // initialize max
  let max = 0;

  // loop through matrix
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      // if found 1
      if (matrix[row][col] == 1) {
        // get the square length from recursive function
        let len = getMaxSquareLength(row, col, memo, matrix);
        // update max based on curr max or len squared
        max = Math.max(max, len ** 2);
      }
    }
  }

  // return max
  return max;
  // Time Complexity: O(m * n), we visit every cell twice at most (when the matrix itself is one big square)
  // Space Complexity: O(m * n), for memoization table
};

function getMaxSquareLength(row, col, memo, matrix) {
  // check bounds or if elem is 0
  if (!inBounds(row, col, matrix) || matrix[row][col] == 0) return 0;
  if (memo[row][col]) return memo[row][col];

  memo[row][col] =
    Math.min(
      getMaxSquareLength(row, col + 1, memo, matrix),
      getMaxSquareLength(row + 1, col, memo, matrix),
      getMaxSquareLength(row + 1, col + 1, memo, matrix)
    ) + 1;

  return memo[row][col];
}

const inBounds = (row, col, matrix) => {
  return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
};
