// helper to get the smallest letter
const getSmallestLetter = (string) => {
  let smallestLetter = null;
  let largestLetter = null;
  const strArr = string.split("");

  for (let i = 0; i < strArr.length; i++) {
    let letter = strArr[i];
    if (letter < smallestLetter || smallestLetter === null) {
      smallestLetter = letter;
    }

    if (letter > largestLetter || largestLetter === null) {
      largestLetter = letter;
    }
  }

  return { smallestLetter, largestLetter };
};

const replaceWithSmallest = (palindrome, index) => {
  const first = palindrome.substring(0, index);
  let last = palindrome.substring(index + 1);

  const result = first + smallestLetter + last;

  return result;
};

var breakPalindrome = function (palindrome) {
  // letter we will be repacing any larger letters with
  const { smallestLetter, largestLetter } = getSmallestLetter(palindrome);
  console.log({ smallestLetter, largestLetter });

  // declare a minPalindrom
  let result = palindrome,
    i = 0;

  // loop through first half
  while (i < Math.ceil(palindrome.length / 2)) {
    let letter = palindrome[i];

    // replace letter that's not our min with min
    if (letter !== smallestLetter) {
      let replacedLetter = replaceWithSmallest(palindrome, i);
      // if its smaller than our reuslt,

      // update result
      result = replacedLetter < palindrome ? replacedLetter : result;
    }

    // update incrementor
    i++;
  }

  return result;
};

var breakPalindrome = function (palindrome) {
  // edge case, if length 1, return empty string
  if (palindrome.length <= 1) return "";

  // making our palindrom an array bc easier to replace
  const palindromeArray = palindrome.split("");

  // loop until halfway
  let i = 0;

  // loop until halfway through string
  while (i < Math.floor(palindromeArray.length / 2)) {
    let letter = palindromeArray[i];

    // if we're looking at an non "a" - we're interested in finding the first non-"a" letter
    if (letter !== "a") {
      // replace that letter at the position with an "a"
      palindromeArray[i] = "a";

      // return a string of our arr where the first non-"a" is repalced with an "a"
      return palindromeArray.join("");
    }

    i++;
  }

  // edge case: palindrome of all "a"s, replace the very last "a" with a "b"
  palindromeArray[palindromeArray.length - 1] = "b";
  return palindromeArray.join("");
};
