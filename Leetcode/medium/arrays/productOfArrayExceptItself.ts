/**
 * 238. Product of Array Except Self

 * @param nums 
 */

// brute force nested loop
// const productExceptSelf = (nums: number[]): number[] => {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;

//     let movePointer = 0;
//     while (movePointer < nums.length) {
//       if (movePointer !== i) {
//         const current = nums[movePointer];
//         product *= current;
//       }
//       movePointer++;
//     }
//     result.push(product);
//   }

//   return result;
// };

/**
 * Solution 1: Forward and Backward Pass
 * 
 * Ex. [1, 2, 3, 4]
 * 
 *  going forward, you want to save the info of all previous elements
 *  in this case, the product of previous elements
 *  at index 0, no previous info so we start at 1
 *  
 *  [1] product = 1
 *  [1,1 <-] b.c  product = 1*1 = 1
 *  [1,1,2 <-] b.c product =1*2 = 2
 *  [1,1,2,6 <-] b.c product = 2*3 = 6
 * 
 * 
 * now we go back, at the end of the array, we don't anything that happens 
 * after so we're trying to get that data
 * - we will be adding elems at the begining but still initialize product with 1
 *  
 *  [1] product = 1
 *  [-> 4,1] product = 4 * 1
 *  [-> 12,4,1] product = 4 * 3
 *  [-> 24,12,4,1] product = 12 * 2
 * 
 *  Now when you combine the 2 arrays, you have your backwards and forwards information
 * 
 */

// getting the result of the forward pass
const forwardProduct = (nums: number[]): number[] => {
  const result = [];
  // first elem will always be 1
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];

    // at index, you want to put the product of prev elem.
    // at start, it should be 0
    result.push(product);

    // next elem will be updated product
    product *= elem;
  }

  return result;
};

const backwardProduct = (nums: number[]): number[] => {
  const result = [];

  let product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const elem = nums[i];

    result.unshift(product);

    product *= elem;
  }

  return result;
};

const productExceptSelf = (nums: number[]): number[] => {
  const forwardArr = forwardProduct(nums);
  const backwardArr = backwardProduct(nums);

  // result will be the info from back and front
  return nums.map((elem, index) => forwardArr[index] * backwardArr[index]);
};

const productItselfInput = [0, 1];
// const productItselfInput = [4, 5, 1, 8, 2];
const testProductItself = productExceptSelf(productItselfInput);
console.log(
  "LOG ~ file: productOfArrayExceptItself.ts ~ line 29 ~ testProductItself",
  testProductItself
);
