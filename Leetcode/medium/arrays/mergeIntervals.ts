/**
 * 56.
 * @param intervals
 */

/**
 *
 *
 */
// const merge = (intervals: number[][]) => {
//   const sorted = intervals.sort(([a], [b]) => {
//     return a - b;
//   });

//   let i = 0;

//   while (i < sorted.length - 1) {
//     let [currA, currB] = sorted[i];
//     let [nextA, nextB] = sorted[i + 1];

//     if (currB >= nextA) {
//       sorted.splice(i, 2, [currA, Math.max(currB, nextB)]);
//     } else {
//       i++;
//     }
//   }

//   return intervals;
// };

/**
 * Stack Solution
 */

const merge = (intervals: number[][]) => {
  if (!intervals.length) return [];
  const sorted = intervals.sort(([a], [b]) => a - b);

  // stack based solution
  let output = [];

  while (sorted.length) {
    // first
    let [i, j] = sorted.pop();

    // squeeze adjacent sorted
    while (sorted.length) {
      let [m, n] = sorted.pop();
      // check if overlapping -> merge
      if (m <= j) [i, j] = [i, Math.max(j, n)];
      else {
        output.push([i, j]);
        [i, j] = [m, n];
      }
    }
    output.push([i, j]);
  }
  return output;
};

/**
 * Nick White Solution - not working for JS
 */

// const merge = (intervals: number[][]) => {
//   if (intervals.length <= 1) return intervals;
//   const sorted = intervals.sort(([a], [b]) => a - b);

//   // stack based solution
//   let output = [];

//   for (let i = 0; i < sorted.length - 1; i++) {
//     const current = sorted[i];
//     const next = sorted[i + 1];

//     let [begin, end] = current;
//     let [nextBegin, nextEnd] = next;

//     if (end >= nextBegin) {
//       end = Math.max(end, nextEnd);
//     } else {
//       output.push([begin, end]);
//     }
//   }
//   return output;
// };

const intervals = [
  [1, 4],
  [0, 2],
  [3, 5],
];
const mergeResult = merge(intervals);
console.log(
  "LOG ~ file: mergeIntervals.ts ~ line 26 ~ mergeResult",
  mergeResult
);
