/**
 *
 * @param {*} string
 */

/**
  * 
  * Runtime: 104 ms, faster than 35.21% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 41.8 MB, less than 33.84% of JavaScript online submissions for Valid Palindrome.
  */

// const formatSentence = (string) => {
//   const regex = /[a-zA-Z0-9]+/g;

//   const paragraph = string.trim().match(regex);

//   return !!paragraph
//     ? paragraph
//         .join("")
//         .split("")
//         .map((letter) => letter.toLowerCase())
//     : [];
// };

// const isPalindrome = (s) => {
//   const formatted = formatSentence(s);
//   if (s.length < 2 || formatted.length === 0) return true;

//   let left = 0;
//   let right = formatted.length - 1;

//   while (left <= right) {
//     if (formatted[left] !== formatted[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

const isValid = (character) => {
  const regex = RegExp(/[a-zA-Z0-9]+/g);

  return regex.test(character);
};

const isPalindrome = (s) => {
  if (s.length < 2) return true;

  const string = s.split(" ").join("");
  console.log("LOG: isPalindrome -> string", string);

  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    const leftChar = string[left].toLowerCase();
    const rightChar = string[right].toLowerCase();

    if (isValid(leftChar) === false) {
      left++;
    }
    if (isValid(rightChar) === false) {
      left--;
    }
    if (leftChar !== rightChar && isValid(leftChar) && isValid(rightChar)) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

// const sentence = "A;m:ma";
const sentence = "A man, a plan, a canal: Panama";
// const sentence = "race a car";
// const sentence = "./";

// const testValid = isValid(",");
// console.log("LOG: testValid", testValid);

const test = isPalindrome(sentence);
console.log("LOG: test", test);
