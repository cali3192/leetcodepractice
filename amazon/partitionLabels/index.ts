// a b
// ababcbaca -> d
// de
// defegde

function partitionLabels(S: string): number[] {
  let result = [];

  // right pointer
  let index = 0;

  //
  let currentMax = 0;

  // last index
  let charMap: { [key: string]: number } = {};
  let leftPointer = -1;

  // mapping to get the latest index occurrence of a letter
  const stringArr = S.split("");
  for (const [index, letter] of stringArr.entries()) {
    charMap[letter] = index;
  }

  // looping through stirng
  while (index < S.length) {
    console.log({ index, currentMax, leftPointer });

    let letter = S[index];
    console.log({ index, letter, currentMax, leftPointer });

    // if max less than the last index of interested letter
    if (currentMax < charMap[letter]) {
      // upddate that position to be our current max
      currentMax = charMap[letter];
    }

    // once we reach that current max
    if (currentMax === index) {
      // push the difference in indices
      result.push(index - leftPointer);

      // update the left pointer
      leftPointer = index;
    }
    index++;
  }

  return result;
}
