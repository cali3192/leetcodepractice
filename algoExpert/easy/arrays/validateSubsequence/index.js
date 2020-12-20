"use strict";
exports.__esModule = true;
exports.isValidSubsequence = void 0;
function isValidSubsequence(array, sequence) {
    // Write your code here.
    // define arr index and seq index and count
    var indx = 0, seqIndx = 0, count = 0;
    // while seq and arr
    while (seqIndx < sequence.length && indx < array.length) {
        // if elem at arr and seq are same
        if (sequence[seqIndx] === array[indx]) {
            // increment seq ind and count
            count++;
            seqIndx++;
        }
        // always increment arr
        indx++;
    }
    return count === sequence.length;
}
exports.isValidSubsequence = isValidSubsequence;
var isValidSubsequenceArrInput = [5, 1, 22, 25, 6, -1, 8, 10];
var isValidSubsequenceSeqInput = [1, 6, -1, 10];
var isValidSubsequenceActual = isValidSubsequence(isValidSubsequenceArrInput, isValidSubsequenceSeqInput);
console.log("LOG ~ file: index.ts ~ line 28 ~ isValidSubsequenceActual", isValidSubsequenceActual);
