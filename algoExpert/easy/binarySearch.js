const assertEquals = require("../../AssertTest/test.js");

function binarySearch(array, target) {
  // Write your code here.
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const elem = array[mid];

    if (elem === target) {
      return mid;
    } else if (elem < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const array = [0, 1, 21, 33, 45, /* half */ 45, 61, 71, 72, 73];
const target = 73;

const binarySearchActual = binarySearch(array, target);
const binarySearchExpected = 9;
console.log(binarySearchActual);

assertEquals(binarySearchActual);
