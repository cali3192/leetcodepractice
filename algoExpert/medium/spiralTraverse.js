var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function spiralTraverse(array) {
    // Write your code here.
    // this array is a matrix...
    var matrix = array;
    var result = [];
    var rowStart = 0, rowEnd = matrix.length - 1, colStart = 0, colEnd = matrix[0].length - 1;
    while (rowStart < rowEnd && colStart < colEnd) {
        var permiter = getPerimeter(rowStart, rowEnd, colStart, colEnd, matrix);
        result = __spreadArrays(result, permiter);
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }
    return result;
}
// matrix[row][col]
var getPerimeter = function (rowStart, rowEnd, colStart, colEnd, matrix) {
    var permiter = [];
    // loop through first row
    var firstRow = matrix[rowStart].slice(colStart, colEnd + 1);
    permiter = __spreadArrays(firstRow);
    // get right col, row index = rowEnd
    for (var i = rowStart + 1; i <= rowEnd; i++) {
        var num = matrix[i][colEnd];
        permiter.push(num);
    }
    // get last row
    for (var i = colEnd - 1; i >= colStart; i--) {
        var num = matrix[rowEnd][i];
        permiter.push(num);
    }
    // get the left col
    for (var i = rowEnd - 1; i > rowStart; i--) {
        var num = matrix[i][colStart];
        permiter.push(num);
    }
    return permiter;
};
var testMatrix = [
    [1, 2, 3, 4, 5],
    [14, 15, 16, 17, 6],
    [13, 20, 19, 18, 7],
    [12, 11, 10, 9, 8],
];
// testing permiter
// const actualPermiter = getPerimeter(1, 2, 1, 3, testMatrix);
// console.log(`LOG: `, { actualPermiter });
var actualSpiralTraverse = spiralTraverse(testMatrix);
console.log("LOG ~ ACTUAL ->", actualSpiralTraverse);
