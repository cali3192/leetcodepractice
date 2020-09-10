/**
 * Count Primes
 * 
 * @param {*} n 
 * Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

/**
 * Solution 1: Niave Sln - isPrime Helper and Counter
 * Runtime:
 * 700 ms, faster than 23.00% of JavaScript online submissions for Count Primes.
 *
 * Memory Usage:
 * 36.7 MB, less than 86.48% of JavaScript online submissions for Count Primes.number
 *
 */

const isPrime = (number) => {
  let i = 2;

  //
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
      return false;
    }

    i++;
  }

  return true;
};

// const countPrimes = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   let counter = 0;
//   let i = 2;
//   while (i < n) {
//     if (isPrime(i)) {
//       counter++;
//     }
//     i++;
//   }

//   return counter;
// };

/**
 ** Solution 2: Dynamic
 *
 * Runtime:
 * 144 ms, faster than 74.70% of JavaScript online submissions for Count Primes.
 *
 * Memory Usage:
 * 64.8 MB, less than 32.10% of JavaScript online submissions for Count Primes.
 *
 */

var countPrimes = function (n) {
  const hash = new Array(n).fill(true);

  hash[0] = false;
  hash[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (hash[i]) {
      for (let j = i ** 2; j < n; j += i) {
        hash[j] = false;
        console.log({ i, j, hash });
      }
    }
  }
  return hash.filter((val) => val).length;
};

const testIsPrime = isPrime(7);
// console.log("LOG: ", testIsPrime);

const test = countPrimes(10);
console.log("LOG: test", test);
