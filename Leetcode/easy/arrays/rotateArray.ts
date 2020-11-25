/**
 *
 * @param {*} nums
 * @param {*} k
 */

/**
 * Solution1
 *
 */
// const rotate = (nums, k) => {
//   const rotated = nums.slice(-k);
//   const later = nums.slice(0, k + 1);

//   return rotated.concat(later);
// };

/**
 * Solution2
 *
 */
// const rotate = (nums, k) => {
//   const index = -k;
//   let counter = nums.length - 1;
//   let index = nums.length - k;

//   const result = [];

//   while (counter >= 0) {
//     result.push(nums[index]);
//     index++;

//     if (index === nums.length - 1) {
//       result.push(nums[index]);
//       index = 0;
//     }

//     counter--;
//   }

//   return result;
// };

/**
 *
 *  ----- Constant Space Solutions -----
 *
 */

/**
 * Solution3
 * 176 ms	38.2 MB
 */

// const rotate = (nums, k) => {
//   let count = 1;

//   while (count <= k) {
//     let current = nums.pop();
//     nums.unshift(current);
//     console.log("LOG: rotate -> current", { current, nums });
//     count++;
//   }

//   return nums;
// };

// const rotate = (nums, k) => {
//   const result = [];
//   for (let index = 0; index < nums.length; index++) {
//     const res = (index + k + 1) % nums.length;
//     console.log({ index, res });

//     result.push(nums[res]);
//   }

//   return result;
// };

const rotate = (nums, k) => {
  return nums.map((element, index) => {
    const rotatedIndex = (index + k + 1) % nums.length;
    console.log("LOG ~ file: rotateArray.ts ~ line 83 ~ returnnums.map ", {
      index,
      rotatedIndex,
      nums,
    });
    return nums[rotatedIndex];
  });
};

const rotateInput = [1, 2, 3, 4, 5, 6, 7];

const rotateTest = rotate(rotateInput, 3);
console.log("LOG: test", rotateTest);
