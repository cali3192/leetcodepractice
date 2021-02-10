export function reverseWordsInString(string: string) {
  // Write your code here.

  // define result array
  const result: string[] = [];
  let temp = "";

  // loop through string
  for (let i = 0; i < string.length; i++) {
    // temp string
    const letter = string[i];

    if (letter === " ") {
      // if you find a space, push temp string to array
      result.unshift(temp);
      // clear temp

      temp = "";
    } else {
      // console.log({temp})
      temp += letter;
    }
  }

  result.unshift(temp);

  console.log({ result });
  return result.join(" ");
  // return string;
}
