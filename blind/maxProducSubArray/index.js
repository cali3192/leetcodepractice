/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // base cases for max and min array
  const min = [1];
  const max = [1];

  // loop through array
  for (let i = 0; i < nums.length; i++) {
    // get element
    const num = nums[i];

    // handle cases if less than 0
    if (num < 0) {
      min[i + 1] = Math.min(max[i] * num, num);
      max[i + 1] = Math.max(min[i] * num, num);
    } else {
      min[i + 1] = Math.min(min[i] * num, num);
      max[i + 1] = Math.max(max[i] * num, num);
    }
  }

  console.log({ min, max });

  max[0] = -Infinity;
  return Math.max(...max);
};
