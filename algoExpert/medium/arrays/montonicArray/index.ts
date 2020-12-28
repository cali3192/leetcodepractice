export function isMonotonic(array: number[]) {
  // Write your code here.
  let increaseCounter = 1,
    decreaseCounter = 1;

  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1];
    const curr = array[i];

    if (prev <= curr) {
      decreaseCounter++;
    }

    if (prev >= curr) {
      increaseCounter++;
    }
  }

  return increaseCounter === array.length || decreaseCounter === array.length;
}
