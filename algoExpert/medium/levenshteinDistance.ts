const createMatrix = (rows: number, columns: number) => {
  const matrix = new Array(columns);

  return matrix.fill(0);
};

export function levenshteinDistance(str1: string, str2: string) {
  // Write your code here.
  const arr = createMatrix(string1.length, string2.length);
  let i = 1;

  // for (let i = 1; i < arr.length; i++) {
  //   const updated = arr[0][i - 1] + 1;

  //   arr[0][i] = updated;
  // }

  // while (i < str2.length) {}

  // return -1;
  return arr;
}

const string1 = "yabd",
  string2 = "abc",
  levenshteinDistanceActual = levenshteinDistance(string1, string2);

console.log(`LOG: `, { levenshteinDistanceActual });
