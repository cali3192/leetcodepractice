const numberLetterMapping: { [key: string]: string[] } = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

export function phoneNumberMnemonics(phoneNumber: string) {
  // Write your code here.
  // define result array
  const result: string[] = [];
  // call helper to generagte mnemonics, initialize at 0, phoneNumberString, result array and empty array
  // return [phoneNumber];
  getphoneNumberMnemonics(0, phoneNumber, result, []);

  return result;
}

const getphoneNumberMnemonics = (
  index: number,
  phoneNumber: string,
  result: string[],
  currentMnemonic: string[]
) => {
  // base case
  // NOTE: if INDEX is same length as phone number,
  if (index === phoneNumber.length) {
    // join currMnemic array
    const foundMnemonic = currentMnemonic.join("");

    // push to result
    result.push(foundMnemonic);
    // else
  } else {
    // get phone number at this index
    const number = phoneNumber[index];

    // get array of letters
    const letters = numberLetterMapping[number];

    // loop through letters
    for (const letter of letters) {
      // currentmenmoic[i] will be letter
      currentMnemonic[index] = letter;

      // call helper and same inputs but increment i to update the currentMonomic f(x)
      getphoneNumberMnemonics(index + 1, phoneNumber, result, currentMnemonic);
    }
  }
};
