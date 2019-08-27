// Inner function - 6.827ms runtime
// const allAnagrams = (string) => {
// const anagrams = {};
// const traverse = (text, options) => {
//   if (text.length === string.length) {
//     anagrams[text] = true;
//   }
//   for (let i = 0; i < options.length; i++) {
//     const element = options[i];
//     traverse(text + element, options.slice(0, i) + options.slice(i + 1));
//   }
// };
// traverse('', string);
// return Object.keys(anagrams);
// };

// No helper function - 4.351ms runtime
const allAnagrams = (string) => {
  const result = {};

  string.split('').forEach((letter, i) => {
    let remaining = string.slice(0, i) + string.slice(i + 1);
    allAnagrams(remaining).forEach((anagram) => {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};

console.time();
const test = allAnagrams('abc');
console.log('test', test);
console.timeEnd();
