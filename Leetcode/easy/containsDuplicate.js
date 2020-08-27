/**
 * 217. Contains Duplicate
 *
 * @param {*} nums
 */

/**
 * Solution 1: Compare with set
 * 80 ms	43.8 MB
 *
 * Runtime:
 * 80 ms, faster than 82.61% of TypeScript online submissions for Contains Duplicate.
 *
 * Memory Usage:
 * 43.8 MB, less than 18.12% of TypeScript online submissions for Contains Duplicate.
 */

// const containsDuplicate = (nums) => {
//   // get all unique elems
//   const set = new Set(nums);

//   return set.size !== nums.length;
// };

/**
 * Solution 2: Hash Table
 * 100 ms	46.2 MB
 *
 * Runtime:
 * 100 ms, faster than 46.19% of JavaScript online submissions for Contains Duplicate.
 *
 * Memory Usage:
 * 46.2 MB, less than 5.01% of JavaScript online submissions for Contains Duplicate.
 */

// const containsDuplicate = (nums) => {
//   const hash = {};

//   nums.forEach((element) => {
//     hash[element] = (hash[element] || 1) + 1;
//   });

//   for (const key in hash) {
//     const element = hash[key];
//     if (element > 2) {
//       return true;
//     }
//   }

//   return false;
// };

/**
 * Solution 3: Sorted
 * 88 ms	40.9 MB
 *
 * Runtime:
 *  88 ms, faster than 67.39% of TypeScript online submissions for Contains Duplicate.
 *
 * Memory Usage:
 * 40.9 MB, less than 68.84% of TypeScript online submissions for Contains Duplicate.
 */

// const containsDuplicate = (nums) => {
//   const sortedNums = nums.sort((a, b) => a - b);

//   for (let i = 0; i < sortedNums.length; i++) {
//     const element = sortedNums[i];
//     const nextElement = sortedNums[i + 1];

//     if (element === nextElement) {
//       return true;
//     }
//   }
//   return false;
// };

/**
 * Solution 2: Hash Table
 * 196 ms	43.2 MB
 *
 * Runtime:
 * 96 ms, faster than 47.10% of TypeScript online submissions for Contains Duplicate.
 *
 * Memory Usage:
 * 43.2 MB, less than 26.09% of TypeScript online submissions for Contains Duplicate.
 */

const containsDuplicate = (nums) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (!map.has(element)) {
      map.set(element, { val: 1 });
    } else {
      map.get(element).val++;
    }

    if (map.get(element).val > 1) return true;
  }

  return false;
};

const inputArr = [1, 3];

const test = containsDuplicate(inputArr);
console.log("LOG: test", test);
