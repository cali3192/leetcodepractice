var addBorderTS = function (picture) {
    var copy = picture.slice(0);
    // return copy;
    var fill = picture[0].slice().map(function (elem) {
        return (elem = '*');
    });
    var fillLast = fill.slice();
    // return fill;
    var matrix = copy.map(function (word) {
        return word.split('');
    });
    matrix.unshift(fill);
    matrix.push(fillLast);
    matrix.forEach(function (elem) {
        //     // FIXME: the stupid buggy thing
        elem.unshift('*');
        elem.push('*');
        // elem.push('1');
    });
    return matrix.map(function (elem) {
        return elem.join('');
    });
    // return matrix;
};
var borderArrTS = ['wzy**'];
var addBorderActualTS = addBorderTS(borderArrTS);
console.log('addBorderActualTS', addBorderActualTS);
