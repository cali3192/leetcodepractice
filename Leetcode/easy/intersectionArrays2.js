/**
 * 350. Intersection of Two Arrays II
 *
 * @param {*} nums1
 * @param {*} nums2
 *
 * Given two arrays, write a function to compute their intersection.
 *
 ** Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 ** Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 *
 ** Note:
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
 */

/**
 * Solution 1: Fill 2 Hash and Compare Element
 */

const createHash = (array) => {
  const hash = {};
  array.forEach((element) => {
    hash[element] = (hash[element] || 0) + 1;
  });

  return hash;
};

// const intersect = (nums1, nums2) => {
//   const hash1 = createHash(nums1);
//   const hash2 = createHash(nums2);

//   let result = [];

//   for (const key in hash1) {
//     let array;
//     if (hash2.hasOwnProperty(key)) {
//       if (hash2[key] < hash1[key]) {
//         array = new Array(hash2[key]);
//       } else {
//         array = new Array(hash1[key]);
//       }
//       array.fill(Number(key));
//       // array.fill(+key);

//       result = [...result, ...array];
//     }
//   }

//   return result;
// };

/*********************************************

 * Solution 2: Fill 1 Hash and Compare Element
 * 80 ms	37.2 MB
 * 
 * Runtime: 
 * 80 ms, faster than 69.49% of JavaScript online submissions for Intersection of Two Arrays II.
 * 
 * Memory Usage: 
 * 37.2 MB, less than 68.17% of JavaScript online submissions for Intersection of Two Arrays II.
 * 

 */

// const intersect = (nums1, nums2) => {
//   // hash will be the smaller of the 2 input arrays
//   const hash =
//     nums1.length <= nums2.length ? createHash(nums1) : createHash(nums2);

//   // array will be the larger of the 2
//   const array = nums1.length <= nums2.length ? nums2 : nums1;

//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const key = array[i];

//     // if key, add
//     if (hash[key] && hash[key] > 0) {
//       result.push(key);
//       // decrement value so we don't compare in the future
//       hash[key]--;
//     }
//   }

//   return result;
// };

/********************************************************
 * * Best Solution
 * Solution 3: Sorted Arrays
 * Speed trading off for space
 * OlogN
 * ON
 *
 * 72 ms	37.7 MB
 *
 * Runtime:
 * 72 ms, faster than 92.97% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage:
 * 37.7 MB, less than 39.95% of JavaScript online submissions for Intersection of Two Arrays II.
 */

const sortArr = (arr) => {
  return arr.sort((a, b) => a - b);
};

const intersect = (nums1, nums2) => {
  const smallerArr =
    nums1.length <= nums2.length ? sortArr(nums1) : sortArr(nums2);
  const largerArr =
    nums1.length <= nums2.length ? sortArr(nums2) : sortArr(nums1);

  let smallPointer = 0;
  let largePointer = 0;

  const result = [];

  while (smallPointer < smallerArr.length && largePointer < largerArr.length) {
    if (smallerArr[smallPointer] === largerArr[largePointer]) {
      result.push(smallerArr[smallPointer]);
      smallPointer++;
      largePointer++;
    } else if (smallerArr[smallPointer] < largerArr[largePointer]) {
      smallPointer++;
    } else {
      largePointer++;
    }
  }

  return result;
};

// const nums1 = [3, 1, 2];
// const nums2 = [1, 1];

const nums1 = [9, 5, 8, 9, 9];
const nums2 = [4, 5, 8, 9, 9, 1];

// const nums1 = [4, 5, 9, 9];
// const nums2 = [4, 6, 9];

const test = intersect(nums1, nums2);
console.log("LOG: test", test);
