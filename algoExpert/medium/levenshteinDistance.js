// helper to create a matrix of 0s
const createMatrix = (cols, rows) => {
  const matrix = new Array(rows + 1)
    .fill(0)
    .map((col) => new Array(cols + 1).fill(0));

  return matrix;
};

const populateInitialRowCols = (matrix) => {
  // updating first row values
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[0][i] = i;
  }

  // updating first col 0
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = i;
  }

  return matrix;
};

// helper getting the values from our interested moves
const getValuesFromMoves = (moves, position, matrix) => {
  const updatedPositions = [];

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    const x = move[0] + position[0];
    const y = move[1] + position[1];

    updatedPositions.push([x, y]);
  }

  const positions = updatedPositions.map((move) => {
    const x = move[0];
    const y = move[1];

    return matrix[x][y];
  });

  const [top, diag, left] = positions;

  return { top, diag, left };
};

const levenshteinDistance = (string1, string2) => {
  //creating a matrix with string1.length coloumns and string2.length rows
  const matrix = createMatrix(string1.length, string2.length);

  // update initial values
  populateInitialRowCols(matrix);

  // we want to look at positions 1 (above, diagnal, right)
  const moves = [
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];

  // the 0 position represents our empty string case so we want to start looking at elements at (1, 1)
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      // get our interested values
      const { top, diag, left } = getValuesFromMoves(moves, [i, j], matrix);

      // getting letters we want to compare, it looks back 1 b.c. we have that extra "" at the start of our matrix
      const letterOne = string1[j - 1];
      const letterTwo = string2[i - 1];

      // if values are the same
      if (letterOne === letterTwo) {
        // update the current position to be the same as what is in its diagonal
        matrix[i][j] = diag;
      } else {
        // get the min of our interested moves
        const minValue = Math.min(top, diag, left);

        // increment the smallest by one and place in position
        matrix[i][j] = minValue + 1;
      }
    }
  }

  // getting the last position in the matrix
  const finalColIndx = matrix[0].length - 1;
  const finalRowIndx = matrix.length - 1;

  // our result should be the last element in the matrix
  return matrix[finalRowIndx][finalColIndx];
};

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
