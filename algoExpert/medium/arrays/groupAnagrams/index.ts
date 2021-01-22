// export function groupAnagrams(words: string[]) {
//   // Write your code here.
//   // const anagrams = new Map();
//   const anagrams: { [key: string]: string[] } = {};
//   // const anagrams = {};

//   words.forEach((word) => {
//     const ordered = orderLetters(word) as string;

//     // if (anagrams.has(ordered)) {
//     //   const curr = anagrams.get(ordered);
//     //   anagrams.set(ordered, [...curr, word]);
//     // } else {
//     //   anagrams.set(ordered, [word]);
//     // }

//     if (!anagrams[ordered]) {
//       anagrams[ordered] = [word];
//     } else {
//       console.log(`LOG: ->`, word, anagrams);
//       anagrams[ordered].push(word);
//     }
//   });

//   const result = Object.values(anagrams);
//   console.log(
//     "LOG ~ file: index.ts ~ line 25 ~ groupAnagrams ~ result",
//     result
//   );

//   return result;
//   // return anagrams.values();
//   // return [["", ""]];
// }

// const orderLetters = (word: string): string => {
//   return word.split("").sort().join("");
// };

export function groupAnagrams(words: string[]) {
  // Write your code here.

  // storage object with str keys and str[] values

  const anagrams: { [key: string]: string[] } = {};

  // loop through words
  words.forEach((word) => {
    // anagrams will have the same amount of letters so order existing letters
    const ordered = orderLetters(word) as string;

    // we use the ordered as our lookup key
    if (!anagrams[ordered]) {
      // set to an arr with word if first of key
      anagrams[ordered] = [word];
    } else {
      // add word to key
      anagrams[ordered].push(word);
    }
  });

  // result is nested array so return values
  return Object.values(anagrams);
}

const orderLetters = (word: string): string => {
  return word.split("").sort().join("");
};
