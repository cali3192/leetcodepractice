const removeDuplicates = (nums) => {
  if (nums == null || nums.length == 0) return 0;
  if (nums.length == 1) return 1;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count] != nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  return count + 1;
};

const actual = removeDuplicates([1, 1, 2]);
console.log('actual ', actual);
