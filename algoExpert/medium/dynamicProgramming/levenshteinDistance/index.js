"use strict";
exports.__esModule = true;
exports.levenshteinDistance = void 0;
function levenshteinDistance(str1, str2) {
    // Write your code here.
    var edits = [];
    // constructing the first row and column in edits
    for (var i = 0; i < str1.length + 1; i++) {
        var row = [];
        for (var j = 0; j < str2.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }
    for (var i = 1; i < edits.length; i++) {
        var row = edits[i];
        for (var j = 1; j < row.length; j++) {
            // const elem =
            //  edits[i][j] =
            if (str1[i - 1] === str2[j - 1]) {
                edits[i][j] = edits[i - 1][j - 1];
            }
            else {
                edits[i][j] = getMin(i, j, edits) + 1;
            }
        }
    }
    console.log({ edits: edits });
    return edits[str1.length][str2.length];
}
exports.levenshteinDistance = levenshteinDistance;
// helper to get min
var getMin = function (i, j, edits) {
    // elem to left
    var left = edits[i - 1][j];
    // elem to the top left
    var diag = edits[i - 1][j - 1];
    // elem to the top
    var top = edits[i][j - 1];
    return Math.min(left, diag, top);
};
var str1 = "abc";
var str2 = "yabd";
var levenshteinDistanceOutput = levenshteinDistance(str1, str2);
console.log("LOG ~ file: index.ts ~ line 26 ~ levenshteinDistanceOutput", levenshteinDistanceOutput);
