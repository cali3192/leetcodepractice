"use strict";
exports.__esModule = true;
exports.runLengthEncoding = void 0;
function runLengthEncoding(string) {
    // Write your code here.
    // initialize result str and counter
    var result = "", counter = 0;
    // loop through
    for (var i = 0; i < string.length - 1; i++) {
        var curr = string[i];
        var next = string[i + 1];
        // while elem same as next,
        if (curr === next) {
            // increase counter
            counter++;
        }
        else {
            // put elem and counter in helper
            var formattedEncoding = getLengthEncoding(curr, counter);
            // append to result stirng
            result += formattedEncoding;
            // reset counter
            counter = 0;
        }
    }
    return result;
}
exports.runLengthEncoding = runLengthEncoding;
var getLengthEncoding = function (letter, counter) {
    var nines = counter > 9 ? Math.floor(counter / 9) : 0;
    var remainder = counter % 9;
    var letterEncodedLength = letter.repeat(nines) + ("" + remainder + letter);
    return letterEncodedLength;
};
var runLengthInput = "AAAAAAAAAAAA"; // 9A3A
var runLengthEncodingResult = runLengthEncoding(runLengthInput);
console.log("LOG ~ file: index.ts ~ line 45 ~ runLengthEncodingResult", runLengthEncodingResult);
