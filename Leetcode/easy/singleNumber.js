/**
 * 136 - Single Number
 *  * @param {*} nums
 *
 * Given a non-empty array of integers, every element appears twice
 * except for one. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you
 * implement it without using extra memory?
 *
 * Example 1:
 *
 * Input: [2,2,1]
 * Output: 1
 * Example 2:
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 */

// const singleNumber = (nums) => {
//   let pointer1 = 0;
//   let pointer2 = 1;

//   while (pointer1 < nums.length - 2) {
//     if (nums[pointer1] !== nums[pointer2]) {
//       pointer2++;
//     }

//     if (pointer2 === nums.length - 1) {
//       if (nums[pointer1] !== nums[pointer2]) {
//         return nums[pointer1];
//       }
//       pointer1++;
//       pointer2 = pointer1 + 1;
//     }
//     pointer1++;
//     console.log(`LOG:`, { pointer1, pointer2 });
//   }
// };

/**
 * Solution 2: Hash Map
 * 84 ms	40.4 MB
 */

// const singleNumber = (nums) => {
//   const hash = {};

//   nums.forEach((element) => {
//     hash[element] = (hash[element] || 0) + 1;
//   });

//   for (const element in hash) {
//     if (hash[element] === 1) {
//       return element;
//     }
//   }
// };

/**
 * Math Solution:
 * 2 * sum(set) - sum(nums)
 * Runtime:
 * 76 ms, faster than 87.42% of TypeScript online submissions for Single Number.
 *
 * Memory Usage:
 * 40.4 MB, less than 28.93% of TypeScript online submissions for Single Number.
 *
 *
 * 76 ms	40.4 MB
 */

const singleNumber = (nums) => {
  // all unique numbers
  const set = new Set(nums);

  // get sum of unique nums
  const setSum = [...set].reduce((acc, elem) => acc + elem);

  // sum of nums
  const numsSum = nums.reduce((acc, elem) => acc + elem);

  // the difference of 2 * setSum and nums should result in unique value
  // i.e. input: [2, 2, 1]
  // 2 * (2 + 1) - (2 + 2 + 1) = 1
  return 2 * setSum - numsSum;
};

/**
 * Best Solution: Set
 * 68 ms	40.6 MB - 97.60% faster 18.06%  memory
 *
 * Note:
 *
 * return [...set][0] results in slower runtime but gives back a
 * marginal amnount of memory back
 *
 * 84 ms	40.6 MB
 */

const singleNumber = (nums) => {
  // create new empty set
  const set = new Set();
  nums.forEach((element) => {
    // if the set has elem
    if (set.has(element)) {
      // delete from set
      set.delete(element);
    } else {
      // if not in set, add
      set.add(element);
    }
    console.log({ element, set });
  });

  // alternatively you can also return [...set][0]
  // return [...set][0];

  // your set should only have 1 value, the unique one
  return set.values().next().value;
};

const inputArr = [2, 2, 1];

const test = singleNumber(inputArr);
console.log("LOG: test", test);
