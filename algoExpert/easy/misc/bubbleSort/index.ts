export function bubbleSort(array: number[]) {
  // Write your code here.
  let isSorted = false,
    counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      // const elem = array[i];

      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }

      isSorted = false;
    }
    counter++;
  }

  return array;
}

const swap = (i: number, j: number, array: number[]) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
