const findThreeLargestNumbers = (array) => {
  // Write your code here.
  // // Niave solution - time: O(nlog(n)) space: O(n)
  return array.sort((a, b) => a - b).slice(array.length - 3, array.length);

  // // pointer - time: O(n) space: O(1)
  // let max1 = Number.MIN_SAFE_INTEGER;
  // let max2 = Number.MIN_SAFE_INTEGER;
  // let max3 = Number.MIN_SAFE_INTEGER;

  // for (const number of array) {
  //   if (number > max1) {
  //     max3 = max2;
  //     max2 = max1;
  //     max1 = number;
  //   } else {
  //     if (number > max3) {
  //       if (number > max2) {
  //         max3 = max2;
  //         max2 = number;
  //       } else {
  //         max3 = number;
  //       }
  //     }
  //   }
  // }

  // return [max3, max2, max1];
};

const actual = findThreeLargestNumbers([10, 10, 15, 11, 14, 2, 7]);
console.log('actual', actual);
