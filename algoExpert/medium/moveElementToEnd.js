// Write your code here.
function moveElementToEnd(array, toMove) {
  // Write your code here.

  // start with a left and right pointer
  let i = 0;
  let j = array.length - 1;

  // loop through
  while (i < j) {
    // move j while its not our target
    while (i < j && array[j] === toMove) {
      j--;
    }

    // if target is in the first porition of arr, swap at i and j
    if (array[i] === toMove) {
      // call swap
      swapElems(i, j, array);
    }
    i++;
  }
  return array;
}

// helper to swap elements
const swapElems = (indxAnc, indxRight, arr) => {
  [arr[indxAnc], arr[indxRight]] = [arr[indxRight], arr[indxAnc]];

  return arr;
};

const testInput = [2, 1, 2, 2, 2, 3, 4, 2];
const actual = moveElementToEnd(testInput, 2);
console.log("LOG ~ file: actual", actual);
