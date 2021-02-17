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
