// const addBorderTS = (picture: Array<string>): Array<string> => {
//   let copy = picture.slice(0);
//   // return copy;
//   let fill = [...picture[0]].map((elem) => {
//     return (elem = '*');
//   });
//   let fillLast = fill.slice();
//   // return fill;
//   let matrix = copy.map((word) => {
//     return word.split('');
//   });
//   matrix.unshift(fill);
//   matrix.push(fillLast);
//   matrix.forEach((elem) => {
//     //     // FIXME: the stupid buggy thing
//     elem.unshift('*');
//     elem.push('*');
//     // elem.push('1');
//   });
//   return matrix.map((elem) => {
//     return elem.join('');
//   });
//   // return matrix;
// };
// const borderArrTS = ['wzy**'];
// const addBorderActualTS = addBorderTS(borderArrTS);
// console.log('addBorderActualTS', addBorderActualTS);
var arrayChange = function (arr) {
    var count = 0;
    for (var i = 1; i < arr.length; i++) {
        var curr = arr[i];
        var prev = arr[i - 1];
        if (arr[i - 1] >= arr[i]) {
            var diff = arr[i - 1] - arr[i] + 1;
            arr[i] = arr[i - 1] + 1;
            count += diff;
        }
    }
    return count;
};
var arrChange = [1, 1, 1];
// inputArray: [2, 1, 10, 1] // 12
var arrChangeActual = arrayChange(arrChange);
console.log('arrChangeActual', arrChangeActual);
// const palindromChecker = (str: String): Boolean => {
//   const obj = {};
// };
// const palinedromActual = palindromChecker('aaab');
var largestDiff = function (arr) {
    return Math.max.apply(Math, arr.slice(1).map(function (x, i) { return Math.abs(x - arr[i]); }));
};
var diffArr = [2, 4, 1, 0];
var largestDiffActual = largestDiff(diffArr);
console.log('largestDiffActual', largestDiffActual);
