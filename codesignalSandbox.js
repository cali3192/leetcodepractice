// largestadjecent product
const largestAdjecentProductArr = [1, 2, -2, -3, 7, 3, 8];

const largestAdjecent = (arr) => {
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    const elem = arr[i];
    const pre = arr[i - 1];
    const prod = elem * pre;
    if (prod > result) result = prod;
  }

  return result;
};

console.log(
  '1. largestAdjecent() \n',
  largestAdjecent(largestAdjecentProductArr)
);

function almostIncreasingSequence(sequence) {
  let result = 0;
  for (let i = 1; i < sequence.length; i++)
    if (sequence[i] <= sequence[i - 1]) {
      result++;
      if (result > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  return true;
}

function matrixElementsSum(matrix) {
  // const arr = matrix.flat(1);

  // TODO: don't forget this!
  // let merged = [].concat.apply([], matrix);
  // return merged.filter((elem) => {
  //   return elem !== 0;
  // }).length;

  let result = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > 0) {
        result += matrix[j][i];
      } else {
        break;
      }
    }
  }
  return result;
}

const matrixTest = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

console.log('matrixElementsSum(matrixTest)', matrixElementsSum(matrixTest));
