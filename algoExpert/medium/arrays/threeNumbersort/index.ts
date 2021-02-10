// // [0, 1, 1, 0, -1, -1, 0, 1]   -> [0, 1, -1] -> [3, 3, 2]

/**
 * SOLUTION 1
 */

// export function threeNumberSort(array: number[], order: number[]) {
//   // Write your code here.

//   // get the umber of occurrences
//   const occurrences = countOccurrences(array, order);

//   console.log({ occurrences });

//   // loop through the array, at every point until your "gateways", simply update element to the associated number in order
//   for (let i = 0; i < array.length; i++) {
//     // if index is less than the num of occurrences of first elem in order
//     if (i < occurrences[0]) {
//       // element updates to first elem  in order
//       array[i] = order[0];

//       // index is between the first num of occurrences and first occ + sec occ
//     } else if (i < occurrences[0] + occurrences[1]) {
//       // element updates to second elem in order
//       array[i] = order[1];
//     } else {
//       // last values will be the last vaue of order
//       array[i] = order[2];
//     }
//   }

//   return array;
// }

// const countOccurrences = (array: number[], order: number[]): number[] => {
//   // tracks the number of occurrences in array
//   const occurrences = [0, 0, 0];

//   for (const number of array) {
//     // occurrences of first elem in order in array
//     if (number === order[0]) {
//       occurrences[0]++;

//       // occurences of second elem in order in array
//     } else if (number === order[1]) {
//       occurrences[1]++;

//       // third
//     } else {
//       occurrences[2]++;
//     }
//   }

//   return occurrences;
// };

/**
 * SOLUTION 2
 */

export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.

  // place all order[0] at start of array and return the occurences of order[0]
  let firstEndIndex = forwardPass(array, order[0]);

  // places all the last element in order in the back of the array
  backwardsPass(array, order[2], firstEndIndex);

  return array;
}

// simple find and swap function
const forwardPass = (array: number[], target: number) => {
  // initialize an anchor and runner
  let anchor = 0,
    pointer = 0;

  // loop through
  while (pointer < array.length) {
    // if you find an element, swap
    if (array[pointer] === target) {
      swap(array, anchor, pointer);
      anchor++;
    }

    // we always increment pointer
    pointer++;
  }

  // at this point, anchor represents the lower bound of where we can place the next element
  return anchor;
};

// same as forward pass but backwards
const backwardsPass = (array: number[], target: number, lowerBound: number) => {
  let pointer = array.length - 1,
    anchor = array.length - 1;

  while (pointer >= lowerBound) {
    if (array[pointer] === target) {
      swap(array, anchor, pointer);
      anchor--;
    }

    pointer--;
  }
};

const swap = (array: number[], anchor: number, runner: number) => {
  [array[anchor], array[runner]] = [array[runner], array[anchor]];
};

const solution = (arr) => {
  // Type your solution here

  let result;
  const left = [];

  const right = [];

  if (arr.length <= 1) {
    result = "";
  }
};
