function longestPeak(array) {
    // Write your code here.
}
// helper to check for peaks
var isPeak = function (left, curr, right) {
    if (left < curr && curr < right) {
        return true;
    }
    return false;
};
// helper to check left side
var checkLeft = function (index, array) {
    var counter = 0;
    while (index > 1) {
        var curr = array[index];
        var prev = array[index - 1];
        if (prev < curr) {
            counter++;
            index--;
        }
        else {
            break;
        }
    }
    return counter;
};
// helper to check right side
var checkRight = function (index, array) {
    var counter = 0;
    while (index < array.length) {
        var curr = array[index];
        var next = array[index + 1];
        if (curr > next) {
            counter++;
            index++;
        }
        else {
            break;
        }
    }
    return counter;
};
var testInput = [1, 3, 3, 4, 0, 10, 6, 5, 4, 3];
// const actual = longestPeak(testInput);
// console.log("LOG ~ file: longestPeak.ts ~ line 31 ~ actual", actual);
var checkLeftActual = checkLeft(3, testInput);
var checkRightActual = checkRight(5, testInput);
// console.log(
//   "LOG ~ file: longestPeak.ts ~ line 40 ~ checkLeftActual",
//   checkLeftActual
// );
console.log("LOG ~ file: longestPeak.ts ~ line 40 ~ checkRightActual", checkRightActual);
