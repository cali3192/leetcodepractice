// export function firstDuplicateValue(array: number[]) {
//   // Write your code here.

//   // define set to hold "seen" elems
//   const map = new Map();

//   // loop through elems
//   for (let i = 0; i < array.length; i++) {
//     const elem = array[i];
//     console.log({ map });

//     // if element is in map
//     if (map.has(elem)) {
//       // return value
//       return elem;
//     } else {
//       // else add to map with elem as key
//       map.set(elem, elem);
//     }
//   }

//   // if we get to the end of the loop
//   return -1;

//   // return [];
// }

// O(n) time, O(n) space
export function firstDuplicateValue(array: number[]) {
  // Write your code here.

  // define set to hold "seen" elems
  const set = new Set();

  // loop through elems
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    if (set.has(elem)) return elem;

    set.add(elem);
  }

  // if we get to the end of the loop
  return -1;

  // return [];
}

/**
 * HINT: problem says values are from 1 - n, so we can leverage that by storing values in corresponding index
 */

// O(n) time, O(c) space
export function firstDuplicateValue(array: number[]) {
  // Write your code here.

  // loop through elems
  for (const val of array) {
    // get abs value of elem for the index lookup
    let newInd = Math.abs(val) - 1;
    console.log({ val, newInd, array });

    // if the elem at that index is negative, we've already seen it
    if (array[newInd] < 0) return newInd + 1;

    // else update the value to be its negative
    array[newInd] *= -1;
  }

  // if we get to the end of the loop, no duplicates
  return -1;
}
