"use strict";
exports.__esModule = true;
exports.isMonotonic = void 0;
function isMonotonic(array) {
    // Write your code here.
    if (array.length <= 1)
        return true;
    var timesDecreased = 1;
    var timesIncreased = 1;
    for (var i = 0; i < array.length; i++) {
        var curr = array[i];
        var next = array[i + 1];
        if (curr >= next) {
            timesDecreased++;
        }
        if (curr <= next) {
            timesIncreased++;
        }
    }
    console.log("LOG: ", { timesDecreased: timesDecreased, timesIncreased: timesIncreased });
    return timesDecreased === array.length || timesIncreased === array.length;
}
exports.isMonotonic = isMonotonic;
var inputArray = [-1, -5, -10, -1100, -1101];
var actual = isMonotonic(inputArray);
console.log("LOG ~ file: montonicArray.ts ~ line 24 ~ actual", actual);
