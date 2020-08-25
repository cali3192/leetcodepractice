/**
 * 7. Reverse Integer
 *
 * Given a 32-bit signed integer, reverse digits of an integer
 *
 * Input: 123
 * Output: 321
 *
 * Input: -123
 * Output: -321
 *
 * Input: 120
 * Output: 21
 *
 */

/**
 * Solution1
 * 0n
 * 140 ms	38.5 MB
 */
// const reverse = (x) => {
//   let result = 0;
//   let arr = [];
//   let stack = `${x}`.split("");

//   if (!x) return result;

//   while (!!stack.length) {
//     let current = stack.pop();
//     arr.push(current);
//   }

//   const reverseStr = arr.join("");

//   result = parseInt(reverseStr);

//   if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
//     return 0;
//   }

//   return x < 0 ? -result : result;
// };

/**
 * Solution2
 * BETTER SOLUTION
 * 0n
 * 84 ms	38.3 MB
 */
const reverse = (x) => {
  let result = 0;

  let pos = x > 0 ? x : -x;

  if (!x) return result;

  while (pos) {
    const digit = pos % 10;
    pos = Math.floor(pos / 10);
    result = result * 10 + digit;
  }

  if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
    return 0;
  }

  return x > 0 ? result : -result;
};

const test = reverse(-8192);
console.log("LOG: test", test);
