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
