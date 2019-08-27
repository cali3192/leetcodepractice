// 10.897s runtime
// const isAnagram = (s, t) => {
//   return s.length !== t.length
//     ? false
//     : s
//         .split('')
//         .sort()
//         .join('') ===
//         t
//           .split('')
//           .sort()
//           .join('');
// };

// 3.46s run time
const isAnagram = (s, t) => {
  if (t.length !== s.length) return false;
  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
    // console.log('c', c);
    // console.log('counts for s \n', counts);
  }
  for (let c of t) {
    // console.log('c', c);
    // console.log('counts for t \n', counts);
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
};

console.time();
const test = isAnagram('anagram', 'nagaram');
console.log('test', test);
console.timeEnd();
