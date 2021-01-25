export function validIPAddresses(string: string) {
  // Write your code here.

  // storing valid ip address
  const result: string[] = [];

  // edge cases, can't put 3 periods and 12 would mean 1 sequence.length > 3 therefore sequence > 255
  if (string.length < 4 || string.length > 12) return result;

  // loop through with first sub (3 positions because of our 255 limit) - starting at 1 b.c. slice
  for (let i = 1; i <= 3; i++) {
    // empty strings to represent our current ip address subsequences
    const ipAddress = [];

    // getting our first substr
    const firstSub = string.slice(0, i);

    // if invalid, continue
    if (!isValid(firstSub)) continue;

    // if valid, set to first position in current ip
    ipAddress[0] = firstSub;

    // loop through to get second sequence (i until the next 3 positions)
    for (let j = i + 1; j <= i + 3; j++) {
      // get our second substring
      const secSub = string.slice(i, j);

      if (!isValid(secSub)) continue;

      // if valid, set to second position
      ipAddress[1] = secSub;

      // third subsequnce starts next to j and will be the next 3 elems
      for (let k = j + 1; k <= j + 3; k++) {
        // third sub will be from j - k
        const thirdSub = string.slice(j, k);

        // fourth sub will be from k to end
        const fourSub = string.slice(k);

        // if last 2 substrings are valid
        if (isValid(thirdSub) && isValid(fourSub)) {
          // place in our current ipArray
          ipAddress[2] = thirdSub;
          ipAddress[3] = fourSub;

          // at this point we found a valid ip and we just need to format it
          const foundValidAddress = ipAddress.join(".");

          // add valid ip to our result array
          result.push(foundValidAddress);
        }
      }
    }
  }

  // return all valid ip addresses
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
