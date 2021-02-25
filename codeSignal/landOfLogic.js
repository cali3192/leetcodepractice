const makeLetters = () => {
  const letters = {};

  let i = 97;

  while (i < 123) {
    let letter = String.fromCharCode(i);
    letters[letter] = letter;
    i++;
  }

  return letters;
};

const longestWord = (text) => {
  const letters = makeLetters();
  return text.split(/[^a-z^A-Z]/).sort((a, b) => b.length - a.length)[0];
};

const longestWordActual = longestWord('Ready, steady, go!');
console.log('longestWordActual', longestWordActual);

// Ratiorg
const sumUpNumbers = (str) => {
  let arr = str.match(/\d+/g);

  return arr === null
    ? 0
    : arr.length === 1
    ? parseFloat(arr[0])
    : arr.reduce((a, b) => {
        return parseFloat(a) + parseFloat(b);
      });
};

const sumUpNumbersActual = sumUpNumbers('12');

console.log('sumUpNumbersActual', sumUpNumbersActual);
