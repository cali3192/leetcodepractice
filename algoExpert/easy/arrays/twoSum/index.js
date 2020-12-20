"use strict";
exports.__esModule = true;
exports.twoNumberSum = void 0;
function twoNumberSum(array, targetSum) {
    // Write your code here.
    var sums = new Map();
    for (var i = 0; i < array.length; i++) {
        // get element
        var element = array[i];
        // const difference
        var diff = targetSum - element;
        if (!sums.has(element)) {
            return [element, diff];
        }
        else {
            // set the diff with elem
            sums.set(diff, element);
        }
        console.log({ sums: sums });
    }
    return [];
}
exports.twoNumberSum = twoNumberSum;
var twoSumInput = [3, 5, -4, 8, 11, 1, -1, 6];
var twoSumTargetInput = 10;
var twoSumActual = twoNumberSum(twoSumInput, twoSumTargetInput);
console.log("LOG ~ file: index.ts ~ line 8 ~ twoSumActual", twoSumActual);
