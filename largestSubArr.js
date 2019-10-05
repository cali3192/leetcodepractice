// Leet Code 53
const maxSequence = (arr) => {
  let min = 0;
  let ans = 0;
  let sum = 0;
  let first = 0;
  let last = 1;

  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

const actual = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log('actual', actual);
