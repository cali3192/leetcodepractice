const smallestDifference = (arrayOne, arrayTwo) => {
  // Write your code here.
  // 	sorting solution
  const sortedOne = arrayOne.sort((a, b) => a - b);
  const sortedTwo = arrayTwo.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  let smallestOne = Number.MAX_SAFE_INTEGER;
  let smallestTwo = Number.MAX_SAFE_INTEGER;

  let diff;
  const smallestPair = [];

  while (i < sortedOne.length && j < sortedTwo.length) {
    //
  }

  return [smallestOne, smallestTwo];
};

const actual = smallestDifference(
  [-1, 5, 10, 15, 20, 3],
  [26, 134, 135, 15, 17]
);

console.log('actual', actual);
