const twoSum = (nums, target) => {
  // // 0.309 ms
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = 1; j < nums.length; j++) {
  //     const first = nums[i];
  //     const second = nums[j];
  //     return first + second === target;
  //   }
  // }

  // // O(n) worst case for time and same with space
  // const obj = {};
  // for (let i = 0; i < nums.length; i++) {
  //   let elem = nums[i];
  //   obj[elem] = i;
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   let diff = target - nums[i];
  //   if (obj.hasOwnProperty(diff) && obj[diff] !== i) {
  //     return [i, obj[diff]];
  //   }
  // }

  // const numsMap = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   if (numsMap.has(target - nums[i])) {
  //     // result.push([target - nums[i], i]);
  //     return [numsMap.get(target - nums[i]), i];
  //   } else {
  //     numsMap.set(nums[i], i);
  //   }
  // }
  // return [];

  // pointer method
  // const sorted = nums.sort((a, b) => a - b);

  // set a left and right pointer
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      console.log('===', left);
      console.log('nums[left], nums[right]', nums[left], nums[right]);
      return [left, right];
    } else if (Math.max(sum, target) === target) {
      console.log('left else if', left);
      left++;
    } else if (Math.max(sum, target) === sum) {
      console.log('right else', right);
      right--;
    }
  }
  return [];
};

const twoSumnums = [2, 7, 11, 15];
const twoActual = twoSum(twoSumnums, 9);

const actual = twoSum([3, 2, 4], 6); // [0, 2]

console.log('twoActual', twoActual); // [0,1]
console.log('actual', actual); // [1, 2]
