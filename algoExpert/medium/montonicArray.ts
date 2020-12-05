export function isMonotonic(array: number[]): boolean {
  // Write your code here.

  // edge cases
  if (array.length <= 1) return true;

  // start counters assuming first elem is going up or down
  let timesDecreased = 1;
  let timesIncreased = 1;

  // loop through
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const next = array[i + 1];

    if (curr >= next) {
      timesDecreased++;
    }

    if (curr <= next) {
      timesIncreased++;
    }
  }

  // will be going a single direction if either times increased or decreased is the same as array length
  return timesDecreased === array.length || timesIncreased === array.length;
}

const inputArray = [-1, -5, -10, -1100, -1101];
const actual = isMonotonic(inputArray);
console.log("LOG ~ file: montonicArray.ts ~ line 24 ~ actual", actual);
