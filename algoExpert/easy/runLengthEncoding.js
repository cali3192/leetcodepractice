"use strict";
exports.__esModule = true;
exports.runLengthEncoding = void 0;
function runLengthEncoding(string) {
    // Write your code here.
    // store string;
    var result = "";
    // initialize count;
    var count = 1;
    // loop throught string
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        var next = string[i + 1];
        console.log("LOG: ", { count: count });
        if (letter !== next) {
            var encoding = formatEncoding(letter, count);
            console.log("LOG ~ file: runLengthEncoding.ts ~ line 20 ~ runLengthEncoding ~ encoding", encoding, "\n\n\n");
            result += encoding;
            count = 1;
        }
        else {
            count = count + 1;
        }
    }
    // if next elem is the same
    // update count
    // else
    // input count in helper to get encoding
    // append to string
    // clear count
    // return string;
    return result;
}
exports.runLengthEncoding = runLengthEncoding;
// 12A
var formatEncoding = function (string, count) {
    //
    var res = "";
    var nines = Math.floor(count / 9); // 1
    var remainder = count % 9;
    if (nines === 0)
        return "" + count + string;
    while (nines > 0) {
        res += "9" + string;
        nines--;
    }
    return res + ("" + remainder + string);
};
var input = "AAAAAAAAAAAABB";
var result = runLengthEncoding(input);
console.log("LOG ~ file: runLengthEncoding.ts ~ line 63 ~ result", result);
