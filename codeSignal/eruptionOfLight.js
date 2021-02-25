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

// Election Winner
// const electionsWinners = (votes, k) => {
//   let max = Math.max(...votes);
//   let n;
//   if (k == 0) {
//     n =
//       votes.filter((vote) => {
//         return vote === max;
//       }).length === 1
//         ? 1
//         : 0;
//   }

//   n = votes.filter((vote) => {
//     return vote + k > max;
//   }).length;

//   return n;
// };
const electionsWinners = (votes, k) => {
  let max = Math.max(...votes);
  let n;
  if (k === 0) {
    return votes.filter((vote) => {
      return vote === max;
    }).length === 1
      ? 1
      : 0;
  }
  n = votes.filter((vote) => {
    return vote + k > max;
  }).length;

  return n;
};

// const electionsWinnersActual = electionsWinners([2, 3, 5, 2], 3);
const electionsWinnersActual = electionsWinners([5, 1, 3, 4, 1], 0);
console.log('electionsWinnersActual', electionsWinnersActual);

const isMAC48Address = (str) => {
  let strArr = str.split('-');

  if (strArr.length !== 6) return false;

  const arr = strArr.join('').split('');

  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    if (letter.charCodeAt(0) > 70) {
      return false;
    }

    if (parseFloat(letter) > 10) {
      return false;
    }
  }
  return true;

  // return (
  //   arr.filter((letter) => {
  //     return (
  //       (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 70) ||
  //       (parseFloat(letter) >= 0 && parseFloat(letter) <= 9)
  //     );
  //   }).length === 12
  // );
};

// const isMacAddressActual = isMAC48Address('00-1B-63-84-45-E6');
const isMacAddressActual = isMAC48Address('12-34-56-78-9A-BG"');
console.log('isMacAddressActual', isMacAddressActual);

// charcodes 65-70
// console.log('F'.charCodeAt(0));
// console.log(!!parseFloat('A'));
// console.log(!!parseFloat('6'));
