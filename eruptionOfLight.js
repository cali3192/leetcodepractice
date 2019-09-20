// // build palindrom algo
// const checkPalindrome = (str) => {
//   return (
//     str
//       .split('')
//       .reverse()
//       .join('') === str
//   );
// };

// const buildPalindrome = (str) => {
//   let rev = str
//     .split('')
//     .reverse()
//     .join('');
//   if (rev === str) return str;
//   for (let i = 0; i < str.length; i++) {
//     console.log('\n\n i', i);
//     console.log('str before conditional', str);
//     console.log('rev', rev);
//     console.log('rev substring', rev.substring(rev.length - i - 1));
//     console.log(`substring to check`, str + rev.substring(rev.length - i - 1));
//     if (checkPalindrome(str + rev.substring(rev.length - i - 1))) {
//       console.log(`str[i]`, str[i]);
//       console.log('rev substring', rev.substring(rev.length - i - 1));
//       console.log(
//         `inside conditional`,
//         str + rev.substring(rev.substring(rev.length - i - 1))
//       );
//       return str + rev.substring(rev.length - i - 1);
//     }
//   }
//   console.log(`outside if block`, str + rev.substring(1));
//   // return str + rev.substring(1);
// };

// Create palindrom psuedocode
// craete a function to reverse palindrom
const revStr = (str) => {
  return str
    .split('')
    .reverse()
    .join('');
};

// create a function to check for palindrom
const checkPalindrome = (str) => {
  return str === revStr(str);
};

// buildPalindrom function
const buildPalindrome = (str) => {
  let rev = revStr(str);

  // if palindrom, return string
  if (checkPalindrome(str)) return str;

  // for length of string
  for (let i = 0; i < str.length; i++) {
    // if str + sub str of reverse is not a palin, continue
    if (checkPalindrome(str + rev.substring(rev.length - i - 1))) {
      return str + rev.substring(rev.length - i - 1);
    }
  }
  return str + rev.substring(1);
};

const buildPalindromeActual = buildPalindrome('abc');
console.log('buildPalindromeActual', buildPalindromeActual);

// string to int whiteboarding
const createNumObj = () => {
  const obj = {};

  i = 0;

  while (i < 10) {
    obj[i] = i;
    i++;
  }

  return obj;
};

const convertToInt = (numStr) => {
  // create obj of nums 0 - 9 as keys and values
  const obj = createNumObj();

  let copy = numStr.slice();
  let result = 0;
  let multiplier = 1;
  let pow = copy.length - 1;

  // reset variables based on negatives
  if (numStr[0] === '-') {
    copy = numStr.slice(1);
    multiplier = -1;
    pow = copy.length - 1;
  }

  // loop through string and convert to num then add sum to result
  for (let i = 0; i < copy.length; i++) {
    const num = copy[i];
    // x ** n same as Math.pow(x, n)
    result += multiplier * obj[num] * 10 ** pow;
    pow--;
  }

  return result;
};

const assertEqual = (result, expected, testName) => {
  if (typeof result === 'object' || typeof expected === 'object') {
    result = JSON.stringify(result);
    expected = JSON.stringify(expected);
  }
  if (result === expected) {
    console.log(`Test passed ${testName}!`);
  } else {
    console.log(
      `Test failed ${testName}: expected ${expected} but got ${result}`
    );
  }
};

const actualOne = convertToInt('-123');
const expectedOne = -123;
// assertEqual(actualOne, expectedOne, 'convertToInt');
