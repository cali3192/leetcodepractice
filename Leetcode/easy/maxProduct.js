// LeetCode 628 - maxProduct - ACCEPTED

// // "Brute force" - t: O(nlog(n)) s: O(log(n))
// const maximumProduct = (nums) => {
//   const sorted = nums
//     // sort the array
//     .sort((a, b) => a - b);

//   // max positives
//   const posMax = sorted
//     .slice(sorted.length - 3, sorted.length)
//     .reduce((acc, elem) => acc * elem);

//   // negMax
//   const negMax = sorted[0] * sorted[1] * sorted[sorted.length - 1];
//   return Math.max(posMax, negMax);
// };

// Optimized - t: O(n) s: O(1)
const maximumProduct = (nums) => {
  // set defaults with max being really small and mins being really high
  let max1 = Number.MIN_SAFE_INTEGER,
    max2 = Number.MIN_SAFE_INTEGER,
    max3 = Number.MIN_SAFE_INTEGER,
    min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER;

  console.log('min1', min2, min1, max1, max2, max3);
  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) max3 = num;

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max3 * max2 * max1, min1 * min2 * max1);
};

const actual = maximumProduct([1, 2, 3, 4]); //24
console.log('actual', actual);

const actual2 = maximumProduct([-4, -3, -2, -1, 60]);
console.log('actual2', actual2);
