// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
  // let count = 0;
  let max = 0;
  const charMap = new Map();
  let pointer = 0;

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if (charMap.has(letter) && charMap.get(letter) >= pointer) {
      pointer = charMap.get(letter) + 1;
    }

    charMap.set(letter, i);

    max = Math.max(max, i - pointer + 1);
  }

  return max;
};

const actual = lengthOfLongestSubstring('abcafycg');
const exampleOne = lengthOfLongestSubstring('abcabcbb');
const exampleThree = lengthOfLongestSubstring('pwwkew');
console.log('actual', actual); // 5
console.log('exampleOne', exampleOne); // 3
console.log('exampleThree', exampleThree); // 3
