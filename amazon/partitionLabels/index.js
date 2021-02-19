// a b
// ababcbaca -> d
// de
// defegde
function partitionLabels(S) {
  let result = [];

  // right pointer
  let index = 0;

  //
  let currentMax = 0;

  // last index
  let charMap = {};
  let leftPointer = -1;

  // mapping to get the latest index occurrence of a letter
  const stringArr = S.split("");

  // todo: check on this
  charMap = stringArr.reduce((letter, accumulator, index) => {
    accumulator[letter] = index;
  }, {});

  console.log(`LOG: inside function`, charMap);

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

const input = "ababcbacadefegdehijijh";
const actual = partitionLabels(input);

console.log("LOG ~ file: index.js ~ line 55 ~ actual", actual);
