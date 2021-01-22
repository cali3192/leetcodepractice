export function kadanesAlgorithm(array: number[]) {
  // Write your code here.

  // base case - initialize subArrSumm and currMax to be first elem
  let subArraySum = array[0];
  let currentMax = array[0];

  for (let i = 1; i < array.length; i++) {
    const elem = array[i];

    // the subarraysum will be max between current elem and the current subarraysum + elem
    subArraySum = Math.max(elem, subArraySum + elem);

    // if subarraysum is greater than current max, update
    currentMax = Math.max(subArraySum, currentMax);
  }

  // return the current max
  return currentMax;
  // return -1;
}
