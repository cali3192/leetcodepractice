/**
 * 283 - Move Zeros
 * @param {*} nums
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 *  maintaining the relative order of the non-zero elements.
 *
 * Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 */

/**
 ** Solution 1: Push and Slice
 * 283. Move Zeroes
 * 80 ms	38.4 MB
 *
 * Runtime:
 * 80 ms, faster than 80.61% of JavaScript online submissions for Move Zeroes.
 *
 * Memory Usage:
 * 38.4 MB, less than 44.47% of JavaScript online submissions for Move Zeroes.
 */

// const moveZeroes = (nums) => {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i, 1);
//     }
//   }
//   return nums;
// };

/**
 ** Solution 2: Left and Right Pointer
 * 76 ms	39.9 MB
 *
 * Runtime:
 * 76 ms, faster than 91.49% of JavaScript online submissions for Move Zeroes.
 *
 * Memory Usage:
 * 39.9 MB, less than 5.07% of JavaScript online submissions for Move Zeroes.
 */

const moveZeroes = (nums) => {
  let anchor = 0;
  let next = 1;

  while (next < nums.length) {
    if (nums[anchor] === 0) {
      [nums[anchor], nums[next]] = [nums[next], nums[anchor]];
      next++;
    } else if (nums[next] !== 0) {
      anchor++;
      [nums[anchor], nums[next]] = [nums[next], nums[anchor]];
      next++;
    } else {
      next++;
    }
  }

  return nums;
};

//                l            r
const inputArr = [1, 0, 0, 3, 12];

//                     lr
const example = [0, 0];

const test = moveZeroes(inputArr);
console.log("LOG: test", test);
