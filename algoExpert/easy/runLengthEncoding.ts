export function runLengthEncoding(string: string) {
  // Write your code here.

  // store string;
  let result = "";

  // initialize count to track character instances;
  let count = 1;

  // loop throught string
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const next = string[i + 1];

    // if next elem is not the same
    if (letter !== next) {
      // get the formatted encoding
      const encoding = formatEncoding(letter, count);

      // append to result
      result += encoding;

      // reset count
      count = 1;
    } else {
      // add unique characters
      count = count + 1;
    }
  }

  return result;
}

// 12A
const formatEncoding = (string: string, count: number) => {
  // number of instances "9" will appear
  let nines = Math.floor(count / 9);

  // remainder
  const remainder = count % 9;

  // less than 9 should not have "9s" before
  if (count <= 9) return `${count}${string}`;

  let nineString = `9${string}`;

  // adding the correct number of 9s
  let repeating = nineString.repeat(nines);

  return repeating + `${remainder}${string}`;
};
const input = "AAAAAAAAAAAABB";
const result = runLengthEncoding(input);
console.log("LOG ~ file: runLengthEncoding.ts ~ line 63 ~ result", result);
