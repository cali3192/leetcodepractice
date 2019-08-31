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
