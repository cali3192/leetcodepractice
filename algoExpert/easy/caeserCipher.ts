const caesarCipherEncryptor = (string: string, key: number): string => {
  // code goes here
  let result = "";

  // handles cases where key > 26
  let updatedKey = key % 26;

  // loop through string
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    // helper to convert
    const decipheredLetter = getNewCharacter(letter, updatedKey);

    // append to result string
    result += decipheredLetter;
  }

  return result;
};

const getNewCharacter = (letter: string, key: number): string => {
  // number - gets the charCode of letter and shifts by key spaces
  const updatedCharCode = letter.charCodeAt(0) + key;

  // 96 -> a and 122 -> z
  // if less than z, we want to maintain charcode
  // else, a + diff
  const charCodeToConvert =
    updatedCharCode <= 122 ? updatedCharCode : 96 + (updatedCharCode % 122);

  // convert the number to a string
  return String.fromCharCode(charCodeToConvert);
};

const actual = caesarCipherEncryptor("xyz", 2); // zab
console.log("actual", actual);
