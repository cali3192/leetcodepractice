/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */
var maxSubArray = function (nums) {
  // edge cases
  if (nums.length === 1) {
    return nums[0];
  }

  // initialize max with first elem and a default current
  // Base Case
  let max = nums[0],
    // set the initial sum
    currentSum = max;

  // loop through the array
  for (let i = 1; i < nums.length; i++) {
    // currentSum will be either current elem or curr elem + currentSum
    currentSum = Math.max(nums[i], nums[i] + currentSum);

    // max sum is either current max or new sum
    max = Math.max(max, currentSum);
  }

  // return the max
  return max;
};
