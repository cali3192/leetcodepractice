/**
 * 66 - Plus One
 * @param {*} digits
 *
 *
 * Given a non-empty array of digits representing a non-negative  *
 * integer, increment one to the integer.
 *
 * The digits are stored such that the most significant digit is at
 * the head of the list, and each element in the array contains a single digit.
 *
 * You may assume the integer does not contain any leading zero,
 * except the number 0 itself.
 *
 *
 ** Example
 *
 ** Input: digits = [1,2,3]
 ** Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 ** Input: digits = [8,9,9]
 ** Output: [9, 0, 0]
 *
 ** Input: digits = [9,9,9]
 ** Output: [1, 0, 0, 0]
 *
 */

/**
 ** Solution1
 * 76 ms	36.7 MB

 * Runtime: 
 *76 ms, faster than 62.73% of JavaScript online submissions for Plus One.

* Memory Usage: 
* 36.7 MB, less than 26.42% of JavaScript online submissions for Plus One.
 *
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};

const inputArr = [8, 9, 9, 9];
const test = plusOne(inputArr);
console.log("LOG: test", test);
