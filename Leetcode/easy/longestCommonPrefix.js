/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 * 
If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/

/**
 *
 ** Solution 1: Naive Nested Loop
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return [];
  if (strs.length === 1) return strs[0];

  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const word = strs[i];

    let compare = "";
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (result[j] !== letter) {
        break;
      } else {
        compare += letter;
      }
    }
    if (!compare.length) {
      return "";
    }

    if (compare.length <= result.length) {
      result = compare;
    }
  }
  return result;
};

/**
 * Solution 2: Divide and Conquer Sort
 */

const input = ["flower", "flow", "flight"];
// const input = ["dog", "racecar", "car"];

const test = longestCommonPrefix(input);
console.log("LOG: test", test);
