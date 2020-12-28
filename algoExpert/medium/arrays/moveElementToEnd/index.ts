export function moveElementToEnd(array: number[], toMove: number): number[] {
  // Write your code here.

  // define left point nad right pointer
  let left = 0,
    right = array.length - 1;

  // loop through while left is less than right
  while (left < right) {
    // if left on target
    if (array[left] === toMove) {
      // swap
      [array[left], array[right]] = [array[right], array[left]];

      // move right down
      right--;
    }

    // only increase left if not target elem
    if (array[left] !== toMove) {
      left++;
    }
  }

  return array;
}
