export function maxSubsetSumNoAdjacent(array: number[]) {
  // Write your code here.

  // edge cases, arr length < 2
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  if (array.length < 2) return getMax(array[0], array[1]);

  // initialize maxArray and place first index of arr
  const maxArray = [array[0]];

  // at second position, update to max of arr[0], arr[1]
  maxArray[1] = getMax(array[0], array[1]);

  // define pointer to start at 2
  let i = 2;

  // while pointer < arr length
  while (i < array.length) {
    // 1. get prev max = arr[i - 1]
    const prevMax = maxArray[i - 1];

    // 2. get sum of latest adj looking back
    const adjSum = array[i] + maxArray[i - 2];
    // maxArray[pointer]  = max(1, 2)

    maxArray[i] = getMax(prevMax, adjSum);

    // increment pointer
    i++;
  }

  // return last elem
  return maxArray[maxArray.length - 1];

  // return -1;
}

const getMax = (first: number, second: number): number => {
  return Math.max(first, second);
};
