const allAnagrams = (string) => {
  const anagrams = {};

  const traverse = (text, options) => {
    if (text.length === string.length) {
      anagrams[text] = true;
    }
    for (let i = 0; i < options.length; i++) {
      const element = options[i];
      traverse(text + element, options.slice(0, i) + options.slice(i + 1));
    }
  };

  traverse('', string);
  return Object.keys(anagrams);
};

console.time();
const test = allAnagrams('abc');
console.log('test', test);
console.timeEnd();
