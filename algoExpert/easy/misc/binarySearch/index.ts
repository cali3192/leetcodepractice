export function binarySearch(array: number[], target: number): number {
  // Write your code here.

  let left = 0,
    mid = Math.floor(array.length / 2),
    right = array.length - 1;

  while (left < right) {
    let curr = array[mid];
    if (curr === target) return mid;
    if (array[left] === target) return left;
    if (array[right] === target) return right;

    if (target < curr) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}
