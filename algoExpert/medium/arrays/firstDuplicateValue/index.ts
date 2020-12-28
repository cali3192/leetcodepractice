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
