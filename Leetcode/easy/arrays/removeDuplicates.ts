/**
 * 26. Remove Duplicates from Sorted Array
 *
 * @param {*} nums
 *
 *
 */

// const removeDuplicates = (nums) => {
//   if (nums == null || nums.length == 0) return 0;
//   if (nums.length == 1) return 1;

//   let count = 0;
//   for (let i = 1; i < nums.length; i++) {
//     console.log({ numsCount: nums[count], count });
//     if (nums[count] !== nums[i]) {
//       count++;
//       nums[count] = nums[i];
//     }
//   }
//   return count + 1;
// };

// const actual = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log("actual", actual);

/**
 * Runtime:
 * 84 ms, faster than 96.57% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 *
 * Memory Usage:
 * 41 MB, less than 40.72% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 *
 *
 *
 * input:                       output:
 * [0, 0, 1, 2, 2, 2, 3]        4
 *
 * [0, i -> 0, (i + 1) -> 1, 2, 2, 2, 3]  // 0 !== 1 nums[i] !== nums[i+1]
 *  put nums[i + 1] at nums[index]  -> [0, 1, 1, 2, 2, 2, 3]
 *  increment index -> index = 2
 *
 *  [0,  1, i -> 1, (i + 1) -> 2, 2, 2, 3] // 1 !== 2
 *  put nums[i + 1] at nums[index]  -> [0, 1, 2, 2, 2, 2, 3]
 *  increment index -> index = 3
 *
 *  [0, 1, 2, i -> 2, (i + 1) -> 2, 2, 3]  // 2 === 2
 *  continue
 *
 * [0, 1, 2, 2, i -> 2, (i + 1) -> 2, 3]  // 2 === 2
 * continue
 *
 * [0, 1, 1, 2, 2, i -> 2, (i + 1) -> 3] // 2 !== 3
 * put nums[i + 1] at nums[index] -> [0, 1, 2, 3, 2, 2, 3]
 *
 * increment index -> index = 4
 *
 */

const removeDuplicates = (nums: number[]): number => {
  // edge cases NOTE: algo will still work without them

  // index 0 is always going to be unique so we can start comparing at 1
  let index = 1;

  // loop through array
  for (let i = 0; i < nums.length - 1; i++) {
    const elem = nums[i];
    const next = nums[i + 1];
    if (elem !== next) {
      nums[index] = next;
      index++;
    }
  }

  return index;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // 5
const testRemoveDuplicates = removeDuplicates(nums);
console.log(
  "LOG ~ file: removeDuplicates.js ~ line 37 ~ testRemoveDuplicates",
  testRemoveDuplicates
);
