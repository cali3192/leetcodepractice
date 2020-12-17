function hasSingleCycle(array: number[]) {
  // Write your code here.
  let visited = 0;
  let currIndex = 0;

  while (visited < array.length) {
    // you can't return back to initial index
    if (visited > 0 && currIndex === 0) return false;

    // should return at starting index
    if (visited > array.length && currIndex === 0) return false;

    // edge case where you never move forward
    if (array[0] === 0) {
      currIndex = 1;
      visited++;
    }

    // helper to get next index
    currIndex = getNewIndex(currIndex, array[currIndex], array.length);

    visited++;
  }

  return currIndex === 0;
}

const getNewIndex = (index: number, elem: number, length: number) => {
  const updatedIndex = (index + elem) % length;

  // cases less than 0 need to be somewhere in the array
  return updatedIndex < 0 ? length + updatedIndex : updatedIndex;
};

const inputArray = [2, 3, 1, -4, -4, 2];

const hasSingleCycleActual = hasSingleCycle(inputArray);
console.log(
  "LOG ~ file: isArrayCycle.ts ~ line 29 ~ hasSingleCycleActual",
  hasSingleCycleActual
);
