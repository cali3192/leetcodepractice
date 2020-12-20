export function isValidSubsequence(array: number[], sequence: number[]) {
  // Write your code here.

  // define arr index and seq index and count
  let indx = 0,
    seqIndx = 0;

  // while seq and arr
  while (seqIndx < sequence.length && indx < array.length) {
    // if elem at arr and seq are same
    if (sequence[seqIndx] === array[indx]) {
      // increment seq ind and count
      seqIndx++;
    }
    // always increment arr
    indx++;
  }

  // we should have gotten to the end of the subseq
  return seqIndx === sequence.length;
}

const isValidSubsequenceArrInput = [5, 1, 22, 25, 6, -1, 8, 10];
const isValidSubsequenceSeqInput = [1, 6, -1, 10];

const isValidSubsequenceActual = isValidSubsequence(
  isValidSubsequenceArrInput,
  isValidSubsequenceSeqInput
);

console.log(
  "LOG ~ file: index.ts ~ line 28 ~ isValidSubsequenceActual",
  isValidSubsequenceActual
);
