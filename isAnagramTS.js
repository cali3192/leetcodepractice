var transform = function (str) {
    return str
        .split('')
        .sort()
        .join('');
};
var isAnagramTS = function (s, t) {
    if (s.length !== t.length)
        return false;
    return transform(s) === transform(t);
    // return true;
};
var actual = isAnagramTS('anagram', 'nagaram');
console.time();
console.log('actual', actual);
console.timeEnd();
// const returnArr = (arr: Array<String>): Array<any> => {
// Number must be lower case in order for this function to work
var returnArr = function (arr) {
    return arr.map(function (num) {
        return Math.pow(num, 2);
    });
};
var returnArrTest = [1, 2, 3, 4];
// const returnArrTest = ['hello', 'world'];
var returnArrActual = returnArr(returnArrTest);
console.log('returnArrActual', returnArrActual);
// const newArr = returnArr('test');
// console.log('newArr', newArr);
var lengthOfLastWord = function (str) {
    var arr = str.trim().split(' ');
    return arr[arr.length - 1].length;
};
var lengthOfLastWordActual = lengthOfLastWord('what is the length of the last word in this stirng');
console.log('lengthOfLastWordActual', lengthOfLastWordActual);
