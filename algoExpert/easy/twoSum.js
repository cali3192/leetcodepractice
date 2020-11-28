// Leetcode 1: Two Sum

// using maps
// const twoNumberSum = (array, target) => {
//   const map = new Map();

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const diff = target - element;
//     if (map.has(diff)) {
//       return diff > map.get(diff)
//         ? [map.get(diff), diff]
//         : [diff, map.get(diff)];
//     }
//     map.set(element, diff);
//   }

//   return [];
// };

// using two pointers
// const twoNumberSum = (array, target) => {
//   // sort the arr
//   const sorted = array.sort((a, b) => a - b);

//   // set a left and right pointer
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     const sum = array[left] + array[right];
//     if (sum === target) {
//       return [array[left], array[right]];
//     }
//     if (Math.max(sum, target) === target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return [];
// };

function twoNumberSum(array, targetSum) {
  // Write your code here.

  // less than 2 won't give a result
  if (array.length < 2) return [];

  const hash = {};

  // loop through
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];

    // find the difference
    const result = targetSum - elem;

    // if hash has own propery, return the result and elem
    if (hash.hasOwnProperty(elem)) {
      return [result, elem];
    } else {
      // store the result in the hash
      hash[result] = elem;
    }
  }
  // default is return an empty array
  return [];
}

const actual = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

const one = twoNumberSum([3, 2, 4], 6);

console.log("actual", actual);
console.log("one", one);
