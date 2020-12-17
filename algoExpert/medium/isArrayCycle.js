var hasSingleCycle = function (array) {
    var visited = 0;
    var currIndex = 0;
    while (visited < array.length) {
        if (visited > array.length && currIndex === 0)
            return false;
        console.log("\n\n LOG ~ line 9 before: ", { currIndex: currIndex });
        currIndex = getNewIndex(currIndex, array[currIndex], array.length);
        console.log("LOG ~ line 9 after: ", { currIndex: currIndex });
        visited++;
    }
    return currIndex === 0;
};
var getNewIndex = function (index, elem, length) {
    var updatedIndex = (index + elem) % length;
    return updatedIndex < 0 ? length + updatedIndex : updatedIndex;
};
var inputArray = [2, 3, 1, -4, -4, 2];
// const textGetNewIndex = getNewIndex(0, 2, 5);
// console.log(
//   "LOG ~ file: isArrayCycle.ts ~ line 16 ~ textGetNewIndex",
//   textGetNewIndex
// );
var hasSingleCycleActual = hasSingleCycle(inputArray);
console.log("LOG ~ file: isArrayCycle.ts ~ line 29 ~ hasSingleCycleActual", hasSingleCycleActual);
