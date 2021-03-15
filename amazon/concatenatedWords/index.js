/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  // make map of current words and map of possible concated words
  const wordsMap = new Map();
  const possibleWords = new Map();

  // define result of unique results
  const res = new Set();

  // loop through words
  for (let i = 0; i < words.length; i++) {
    // add word to word set
    wordsMap.set(words[i], 1);
  }

  // loop through words
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // recursive call looking for concatenated wods
    if (isConcatWord(word, wordsMap, possibleWords)) {
      // if found, add to set
      res.add(words[i]);
    }
  }

  // return arr of unique concat words
  return [...res];
};

function isConcatWord(word, wordsMap, possibleWords) {
  // BASE CASE: if word in possible words, return
  if (possibleWords.has(word)) {
    return possibleWords.get(word);
  }

  // loop through word
  for (let i = 1; i < word.length; i++) {
    // get word until - 0 - i
    let prefix = word.slice(0, i);

    // get word from i - end
    let suffix = word.slice(i);

    if (
      // if prefix and suffix exist in wordMap of if result of suffix in concat true
      wordsMap.has(prefix) &&
      (wordsMap.has(suffix) || isConcatWord(suffix, wordsMap, possibleWords))
    ) {
      // if all conditions meet, add to possibleWords
      possibleWords.set(word, true);
      // return at this point
      return true;
    }
  }

  // this word is not possible so track
  possibleWords.set(word, false);
  return false;
}
