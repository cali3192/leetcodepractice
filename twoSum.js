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

  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(target - nums[i])) {
      return [numsMap.get(target - nums[i]), i];
    } else {
      numsMap.set(nums[i], i);
    }
  }
};

const twoSumnums = [2, 7, 11, 15];
console.time();
const twoActual = twoSum(twoSumnums, 9);
console.timeEnd();
console.log('twoActual', twoActual);
