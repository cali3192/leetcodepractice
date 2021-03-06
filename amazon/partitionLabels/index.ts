// a b
// ababcbaca -> d
// de
// defegde

// function partitionLabels(S: string): number[] {
//   let result = [];

//   // right pointer
//   let index = 0;

//   //
//   let currentMax = 0;

//   // last index
//   let charMap: { [key: string]: number } = {};
//   let leftPointer = -1;

//   // mapping to get the latest index occurrence of a letter
//   const stringArr = S.split("");
//   for (const [index, letter] of stringArr.entries()) {
//     charMap[letter] = index;
//   }

//   // looping through stirng
//   while (index < S.length) {
//     console.log({ index, currentMax, leftPointer });

//     let letter = S[index];
//     console.log({ index, letter, currentMax, leftPointer });

//     // if max less than the last index of interested letter
//     if (currentMax < charMap[letter]) {
//       // upddate that position to be our current max
//       currentMax = charMap[letter];
//     }

//     // once we reach that current max
//     if (currentMax === index) {
//       // push the difference in indices
//       result.push(index - leftPointer);

//       // update the left pointer
//       leftPointer = index;
//     }
//     index++;
//   }

//   return result;
// }

// a b
// ababcbaca -> d
// de
// defegde

function partitionLabels(S: string): number[] {
  let result = [];

  // define map
  const map = new Map();

  // right pointer
  // let index = 0;
  // define a right pointer, and initialize left pointer to -1
  let rightPointer = 0,
    leftPointer = -1;

  // let leftPointer = -1;

  for (const [index, letter] of S.split("").entries()) {
    // charMap[letter] = index;
    map.set(letter, index);
  }

  console.log({ map });
  for (let i = 0; i < S.length; i++) {
    // update right pointer to either  be the curr max or the maxIndex at currLetter
    const elem = S[i];
    rightPointer = Math.max(rightPointer, map.get(elem));

    // when you are in the index
    if (i === rightPointer) {
      // push difference between right and left pointer
      result.push(rightPointer - leftPointer);
      // update the left index to i
      leftPointer = i;
    }
  }

  console.log({ result });
  return result;
}
