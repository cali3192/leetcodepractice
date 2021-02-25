// leetCode 26
const noRepeat = (nums) => {
  let count = 1;
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[pointer] !== nums[i]) {
      count++;
      pointer = i;
    }
  }
  return count;
};

const actual = noRepeat([0, 1, 1, 2, 3, 3, 3, 4]); // 5
console.log('actual', actual);
const actual1 = noRepeat([1, 1, 2]); // 2
console.log('actual1', actual1);
