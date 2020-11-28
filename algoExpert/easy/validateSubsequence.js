/**
 *
 * @param {*} array
 * @param {*} sequence
 */

function isValidSubsequence(array, sequence) {
  // Write your code here.

  let count = sequence.length;
  let arrPointer = 0;
  let seqPointer = 0;

  // if both exsists
  while (arrPointer < array.length && seqPointer < sequence.length) {
    // if elems are the same
    if (sequence[seqPointer] === array[arrPointer]) {
      // decrease count
      count--;
      // this should be the only condition where seqpointer can
      seqPointer++;
    }

    arrPointer++;

    if (count === 0) {
      return true;
    }
  }
  return false;
}

const isValidSubInputArr = [5, 1, 22, 25, 6, -1, 8, 10];
const isValidSubInputSub = [1, 6, -1, 10];

const actualIsValidSeq = isValidSubsequence(
  isValidSubInputArr,
  isValidSubInputSub
);

console.log(
  "LOG ~ file: validateSubsequence.js ~ line 32 ~ actualIsValidSeq",
  actualIsValidSeq
);
