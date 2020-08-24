/**
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *  *
 */

/**
 *
 * Pointer Solution
 * Runtime:
 * Memory: 148 ms	37.3 MB
 */

/**
 *
 * Hash Table
 * Runtime: 148 ms
 * Memory: 37.3 MB
 */
// const twoSum = (nums, target) => {
//   let index1 = 0;
//   let index2 = 1;

//   while (index1 < nums.length - 1) {
//     if (nums[index1] + nums[index2] === target) return [index1, index2];

//     if (index2 < nums.length - 1) {
//       index2++;
//     }
//     if (index2 === nums.length - 1) {
//       if (nums[index1] + nums[index2] === target) return [index1, index2];
//       index1++;
//       index2 = index1 + 1;
//     }

//   }
// };

/**
 *
 * Hash Map
 * Runtime: 76 ms
 * Memory: 37.7 MB
 *
 */

// const twoSum = (nums, target) => {
//   // create new map
//   const hash = new Map();

//   // loop through nums
//   for (let index = 0; index < nums.length; index++) {
//     // calc diff
//     const diff = target - nums[index];

//     // return hash has diff
//     if (hash.has(diff)) {
//       return [hash.get(diff), index];
//     }

//     // {elem: index}
//     hash.set(nums[index], index);
//   }
// };

/**
 * Best Solution
 *  - Marginal differences in rt and memory but hash table is slightly faster
 * Hash Table
 * Runtime: 72 ms
 * Memory: 38.1 MB
 *
 */
const twoSum = (nums, target) => {
  const hash = {};

  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];

    if (hash.hasOwnProperty(diff)) {
      return [hash[diff], index];
    }
    hash[nums[index]] = index;

    console.log(`LOG: `, { index, diff, hash });
  }
};

const test1 = twoSum([2, 11, 15, 7], 9);
// console.log("LOG: test1", test1);
