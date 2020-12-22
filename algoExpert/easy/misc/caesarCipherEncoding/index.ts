export function caesarCipherEncryptor(string: string, key: number) {
  // Write your code here.

  // define result string
  let result = "";
  // handles cases where key is larger than number of possibilities
  let updatedKey = key % 26;

  // loop through current string
  for (let i = 0; i < string.length; i++) {
    // for each element,
    const letter = string[i];

    // pass through function to get encoding
    const updatedLetter = getUpdatedChar(letter, updatedKey);

    // append to current result string
    result += updatedLetter;
  }

  // return the updated result
  return result;
}

// helper
const getUpdatedChar = (letter: string, key: number): string => {
  // update our encoding
  const encoding = letter.charCodeAt(0) + key;

  // get letter encoding
  const newEncoding = getEncoding(encoding);

  // return teh character of updated encoding
  return String.fromCharCode(newEncoding);
};

// helper to get encoding if not within range
const getEncoding = (updatedCharCode: number): number => {
  // a - z : 96 - 122
  return updatedCharCode <= 122
    ? updatedCharCode
    : 96 + (updatedCharCode % 122);
};
