export function reverseWordsInString(string: string) {
  // Write your code here.

  // define result array
  const result: string[] = [];
  let temp = "";

  // loop through string
  for (let i = 0; i < string.length; i++) {
    // temp string
    const letter = string[i];

    // if you find a space,
    if (letter === " ") {
      // push temp start of array
      result.unshift(temp);

      // clear temp
      temp = "";
    } else {
      // update temps
      temp += letter;
    }
  }

  // adding the last temp to the array
  result.unshift(temp);

  return result.join(" ");
}

// SOLUTION 2:
function reverseWordsInString(string) {
  // Write your code here.
  let result = "";

  // fixed pointer
  let rightPointer = string.length;

  // loop backwards
  for (let i = string.length - 1; i >= 0; i--) {
    // get curr letter
    const letter = string[i];

    // if space found
    if (letter === " " || i === 0) {
      // get word and add space
      let word = string.slice(i + 1, rightPointer) + " ";

      word = i === 0 ? word : word + " ";

      // add to result string
      result += word;

      // update right pointer
      rightPointer = i;
    }

    if (i === 0) {
      const word = string.slice(i, rightPointer);
      result += word;
    }
  }

  return result;
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
