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
 * Solution 1:
 */

const intersect = (nums1, nums2) => {
  let arr1;
  let arr2;
  if (nums1.length !== nums2.length) {
    arr1 = nums1.length > nums2.length ? [...nums1] : [...nums2];
    arr2 = nums1.length < nums2.length ? [...nums1] : [...nums2];
  } else {
    arr1 = [...nums1];
    arr2 = [...nums2];
  }

  return { arr1, arr2 };
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

const test = intersect(nums1, nums2);
console.log("LOG: test", test);
