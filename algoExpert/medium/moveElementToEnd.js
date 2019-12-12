/**
 * prompt:
 * given an arr of integers, move all instances of the integer in the array to the end.
 * the function should perform the sort in place.
 * it does not need to maintian the order of the other integers
 *
 * @params : array: [integers], toMove: integer
 *
 * @example:
 * I: [2,1,2,2,2,3,4,2],2
 * O: [1,3,4,2,2,2,2,2]
 *
 * I: [1,2,3,4,5],3
 * O: [1,2,3,4,5]
 *
 * @idea
 * two pointers that start at start and end
 * if arr[j] === toMove, then we do not need to shift number,
 *  and then we can move end pointer
 * if arr[j] !== target, but arr[i] === target, swap!
 *
 * @timecomplexity -
 * O(n) - n is the length of the array
 * @spacecomplexity
 * O(1)
 *
 **/

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};

const moveElementToEnd = (array, toMove) => {
  // Best Solution
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j--;

    // if (array[i] === toMove) swap(i, j, array);
    if (array[i] === toMove) [array[i], array[j]] = [array[j], array[i]];

    i++;
  }
  return array;
};

const expected = [1, 3, 4, 2, 2, 2, 2, 2];
const inputArr = [2, 1, 2, 2, 2, 3, 4, 2];
const toMoveInput = 2;
const actual = moveElementToEnd(inputArr, toMoveInput);

console.log(actual);
