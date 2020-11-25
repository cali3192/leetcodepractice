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
var forwardProduct = function (nums) {
    var result = [];
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        var elem = nums[i];
        result.push(product);
        product *= elem;
    }
    return result;
};
var backwardProduct = function (nums) {
    var result = [];
    var product = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        var elem = nums[i];
        result.unshift(product);
        product *= elem;
    }
    return result;
};
// forward and backward
var productExceptSelf = function (nums) {
    var forwardArr = forwardProduct(nums);
    var backwardArr = backwardProduct(nums);
    // console.log(
    //   "LOG ~ file: productOfArrayExceptItself.ts ~ line 47 ~ forwardArr",
    //   forwardArr,
    //   backwardArr
    // );
    return nums.map(function (elem, index) { return forwardArr[index] * backwardArr[index]; });
};
var productItselfInput = [0, 1];
// const productItselfInput = [4, 5, 1, 8, 2];
var testProductItself = productExceptSelf(productItselfInput);
console.log("LOG ~ file: productOfArrayExceptItself.ts ~ line 29 ~ testProductItself", testProductItself);
