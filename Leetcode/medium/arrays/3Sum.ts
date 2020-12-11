const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);

  const result = [];
  let i = 0;

  while (i < nums.length - 2) {
    let j = i + 1;
    let k = nums.length - 1;

    const left = nums[i];
    const mid = nums[j];
    const right = nums[k];

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        const validSum = [left, mid, right];
        result.push(validSum); // 2
        // i = j + 1;
        j = incrementIndex(nums, j);
      }

      if (sum < 0) {
        j++;
      }

      if (sum > 0) {
        k--;
      }
    }
    i = incrementIndex(nums, i);
  }

  return result;
};

// to move index until it points to a new number
const incrementIndex = (array: number[], index: number): number => {
  const anchor = array[index];

  for (let i = index + 1; i < array.length; i++) {
    const elem = array[i];
    if (anchor !== elem) {
      return i;
    }
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, 4]));
