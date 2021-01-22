export function validIPAddresses(string: string) {
  // Write your code here.

  const result: string[] = [];

  // edge cases, can't put 3 periods and 12 would mean 1 sequence.length > 3 therefore sequence > 255
  if (string.length < 4 || string.length > 12) return result;

  // loop through to place first period
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    // empty strings to represent our 4 subsequences
    const ipAddress = ["", "", "", ""];

    const firstSub = string.slice(0, i);
    ipAddress[0] = firstSub;

    if (!isValid(firstSub)) continue;

    for (let j = i + 1; j < i + Math.min(string.length - 1, 4); j++) {
      // const secSub = string.substring(i + 1, j);
      const secSub = string.slice(i, j);

      ipAddress[1] = secSub;

      if (!isValid(secSub)) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        const thirdSub = string.slice(j, k);
        const fourSub = string.slice(k);

        ipAddress[2] = thirdSub;
        ipAddress[3] = fourSub;

        if (isValid(thirdSub) && isValid(fourSub)) {
          const foundValidAddress = ipAddress.join(".");
          console.log({ foundValidAddress });
          result.push(foundValidAddress);
        }
      }
    }
  }

  console.log(result.length);

  return result;
}

const isValid = (sequence: string): boolean => {
  // check if sequence is length 0
  if (sequence.length === 0) return false;

  // checks for leading 0s
  if (sequence.length > 1 && sequence[0] === "0") {
    return false;
  }

  // checking for range
  const seqToNum = parseFloat(sequence);

  return seqToNum <= 255;
};
