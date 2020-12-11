const updatedMatrix = 

const riverSizes = (matrix: number[][]): number[] => {
  // Write your code here.
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const node = matrix[i][j];

      if (haveSeen(node)) continue;

      traverse(i, j, matrix, result);
    }
  }

  return result;
};

const isOutOfBoudnds = (i, j, iMax, jMax) => {
  return i < iMax && j < jMax;
};

const haveSeen = (node: number | string) => {
  return node === "+";
};

const uptdateToSeen = ( i: number, j: number, matrix: number[][]) => {
return matrix[i][j] = '+'
};

const isRiver = (node) => {
  return node === 1;
};

const unvisitedNeightbors = (i: number, j: number, matrix: number[][] ) => {
  //
};

const traverse = (
  i: number,
  j: number,
  matrix: number[][],
  sizes: []
): void => {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();

    i = currentNode[0];
    j = currentNode[1];

    if (haveSeen(matrix[i][j])) continue;

    uptdateToSeen(matrix, i, j);

    if (!isRiver(matrix[i][j])) continue;

    currentRiverSize = currentRiverSize + 1;

    // const unvisitedNeightbors;
  }

  return;
};
