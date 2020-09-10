/**
 *
 * @param {*} string
 */

/**
 ** Solution 1: Hash Table
 * 108 ms	38.1 MB
 *
 * Runtime:
 * 108 ms, faster than 50.08% of JavaScript online submissions for Valid Anagram.
 *
 * Memory Usage:
 * 38.1 MB, less than 83.58% of JavaScript online submissions for Valid Anagram.
 */
const constructHash = (string) => {
  const hash = {};

  string.split("").forEach((letter) => {
    hash[letter] = (hash[letter] || 0) + 1;
  });

  return hash;
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sHash = constructHash(s);

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    if (sHash[letter]) {
      sHash[letter]--;
      if (sHash[letter] === 0) {
        delete sHash[letter];
      }
    }
  }

  return Object.keys(sHash).length === 0;
};

/**
 * Solution 2: Sorting
 * 108 ms	43.5 MB
 *
 * Runtime:
 * 108 ms, faster than 50.08% of JavaScript online submissions for Valid Anagram.
 *
 * Memory Usage:
 * 43.5 MB, less than 16.75% of JavaScript online submissions for Valid Anagram.
 *
 */

// const sortWord = (string) => {
//   return string.split("").sort().join("");
// };

// const isAnagram = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sSorted = sortWord(s);
//   const tSorted = sortWord(t);

//   for (let i = 0; i < sSorted.length; i++) {
//     const sLetter = sSorted[i];
//     const tLetter = tSorted[i];

//     if (sLetter !== tLetter) {
//       return false;
//     }
//   }

//   return true;
// };

const s = "rat";
const t = "tart";

// const s = "anagram";
// const t = "nagaram";

const test = isAnagram(s, t);
console.log("LOG: test", test);
