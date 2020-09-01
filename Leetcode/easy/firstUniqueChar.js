/**
 * 387. First Unique Character in a String
 * @param {*} s: string
 *
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 *
 * Examples:
 * s = "leetcode" --> return 0.
 *
 * s = "loveleetcode" --> return 2.
 *
 * Note: You may assume the string contains only lowercase English letters.
 */

/**
 ** Better Solution
 * Solution 1: Hash
 * Runtime:
 * 96 ms, faster than 96.20% of JavaScript online submissions for First Unique Character in a String.
 *
 * Memory Usage:
 * 40.9 MB, less than 28.80% of JavaScript online submissions for First Unique Character in a String.
 */

const firstUniqChar = (s) => {
  //   /**
  //    * In hash
  //    * key: letter
  //    * value: [num. occurrences, index]
  //    */

  const hash = {};

  // loop through string
  for (let i = 0; i < s.length; i++) {
    const key = s[i];

    // if doesn't exist
    if (!hash[key]) {
      // letter: [1, index]
      hash[key] = [1, i];
    } else {
      // increment occurrences
      hash[key][0]++;
    }
  }

  for (const key in hash) {
    const element = hash[key];
    if (element[0] === 1) {
      return element[1];
    }
  }

  return -1;
};

/*
 *
 * Solution 2: Map
 *
 * Runtime:
 * 172 ms, faster than 20.72% of JavaScript online submissions for First Unique Character in a String
 *
 * Memory Usage:
 * 42.9 MB, less than 21.42% of JavaScript online submissions for First Unique Character in a String.
 */

// const firstUniqChar = (s) => {
//   const map = new Map();

//   // loop through string
//   s.split("").forEach((letter, index) => {
//     if (!map.has(letter)) {
//       // set letter: {val, index}
//       map.set(letter, { val: 1, index });
//     } else {
//       map.get(letter).val++;
//     }
//   });

//   for (const value of map.values()) {
//     // at first instance of val = 1, return index
//     if (value.val === 1) {
//       return value.index;
//     }
//   }
//   return -1;
// };

const test = firstUniqChar("loveleetcode");
// const test = firstUniqChar("");
console.log("LOG: test", test);
