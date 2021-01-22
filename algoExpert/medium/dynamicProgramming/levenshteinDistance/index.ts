export function levenshteinDistance(str1: string, str2: string) {
  // Write your code here.

  const edits: number[][] = [];

  // constructing the first row and column in edits
  for (let i = 0; i < str1.length + 1; i++) {
    const row = [];

    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j);
    }

    row[0] = i;
    edits.push(row);
  }

  // populating starting at [1,1] - b.c. 0 positions represent empty string
  for (let i = 1; i < edits.length; i++) {
    const row = edits[i];

    for (let j = 1; j < row.length; j++) {
      // if elements are same
      if (str1[i - 1] === str2[j - 1]) {
        // result will be elem to the top left
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        // get min of left, top left and top and add 1
        edits[i][j] = getMin(i, j, edits) + 1;
      }
    }
  }

  // console.log({ edits });

  // return the last element in edits
  return edits[str1.length][str2.length];
}

// helper to get min
const getMin = (i: number, j: number, edits: number[][]) => {
  // elem to left
  const left = edits[i - 1][j];

  // elem to the top left
  const diag = edits[i - 1][j - 1];

  // elem to the top
  const top = edits[i][j - 1];

  return Math.min(left, diag, top);
};

const str1 = "abc";
const str2 = "yabd";

const levenshteinDistanceOutput = levenshteinDistance(str1, str2);
console.log(
  "LOG ~ file: index.ts ~ line 26 ~ levenshteinDistanceOutput",
  levenshteinDistanceOutput
);
