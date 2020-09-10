/**
 * 28.Implement StrStr
 * @param {*} haystack
 * @param {*} needle
 *
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 */

/**
 ** Solution 1:
 * 76 ms	36.7 MB
 *
 * Runtime:
 * 76 ms, faster than 75.22% of JavaScript online submissions for Implement strStr().
 *
 * Memory Usage:
 * 36.7 MB, less than 79.54% of JavaScript online submissions for Implement strStr().
 *
 */

const strStr = (haystack, needle) => {
  // checks to return 0
  if ((haystack.length === 0 && needle.length === 0) || needle.length === 0)
    return 0;

  // split haystack on needle
  const splitArr = haystack.split(needle);

  // splitArr.length === 1 when you can't split on needle
  // the needle starts at length of half of splitArr
  return splitArr.length === 1 || needle.length > haystack.length
    ? -1
    : splitArr[0].length;
};

const haystack = "a";
const needle = "a";

const test = strStr(haystack, needle);
console.log("LOG: test", test);
