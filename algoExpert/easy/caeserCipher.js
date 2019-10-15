
const caesarCipherEncryptor = (string, key) => {
  // Write your code here.
  let str = '';
  const newKey = key % 26;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    str += createNewLetter(letter, newKey);
  }
  return str;
};

const createNewLetter = (letter, key) => {
  let newCharCode = letter.charCodeAt() + key;
  return newCharCode <= 122
    ? String.fromCharCode(newCharCode)
    : String.fromCharCode(96 + (newCharCode % 122));
};

const actual = caesarCipherEncryptor('abs', 2); // zab
console.log('actual', actual);
