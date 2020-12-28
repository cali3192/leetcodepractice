type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.

  // sort the input
  const sorted = array.sort((a, b) => a - b);

  // loop through sorted
  for (let i = 0; i < sorted.length; i++) {
    const elem = sorted[i];

    // have an pointer at next and pointer at end
    let left = i + 1,
      right = sorted.length - 1;

    // while left is less than end, search
    while (left < right) {
      let leftElem = sorted[left],
        rightElem = sorted[right];

      // calculate diff between target sum
      const diff = targetSum - (elem + leftElem + rightElem);

      // diff 0 is
      if (diff === 0) return [[elem, leftElem, rightElem]];

      if (diff < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return [];
}
