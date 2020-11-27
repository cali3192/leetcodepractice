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
// const merge = (intervals: number[][]) => {
//   if (!intervals.length) return [];
//   const sorted = intervals.sort(([a], [b]) => a - b);
//   // stack based solution
//   let output = [];
//   while (sorted.length) {
//     // first
//     let [i, j] = sorted.pop();
//     // squeeze adjacent sorted
//     while (sorted.length) {
//       let [m, n] = sorted.pop();
//       // check if overlapping -> merge
//       if (m <= j) [i, j] = [i, Math.max(j, n)];
//       else {
//         output.push([i, j]);
//         [i, j] = [m, n];
//       }
//     }
//     output.push([i, j]);
//   }
//   return output;
// };
/**
 * Stack Solution
 */
var merge = function (intervals) {
    if (intervals.length <= 1)
        return intervals;
    var sorted = intervals.sort(function (_a, _b) {
        var a = _a[0];
        var b = _b[0];
        return a - b;
    });
    // stack based solution
    var output = [];
    for (var i = 0; i < sorted.length - 1; i++) {
        var current = sorted[i];
        var next = sorted[i + 1];
        var begin = current[0], end = current[1];
        var nextBegin = next[0], nextEnd = next[1];
        if (end >= nextBegin) {
            end = Math.max(end, nextEnd);
        }
        else {
            output.push([begin, end]);
        }
    }
    return output;
};
var intervals = [
    [1, 4],
    [0, 2],
    [3, 5],
];
var mergeResult = merge(intervals);
console.log("LOG ~ file: mergeIntervals.ts ~ line 26 ~ mergeResult", mergeResult);
