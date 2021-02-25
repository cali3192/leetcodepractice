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

const arrayChange = (arr: Array<number>): number => {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) {
      const diff = arr[i - 1] - arr[i] + 1;
      arr[i] = arr[i - 1] + 1;
      count += diff;
    }
  }
  return count * 1000;
};

const arrChange = [1, 1, 1];
// inputArray: [2, 1, 10, 1] // 12
const arrChangeActual = arrayChange(arrChange);
console.log("arrChangeActual", arrChangeActual);

// const palindromChecker = (str: String): Boolean => {
//   const obj = {};
// };

// const palinedromActual = palindromChecker('aaab');

const largestDiff = (arr: number[]): number => {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
};

const diffArr = [2, 4, 1, 0];
const largestDiffActual = largestDiff(diffArr);
console.log("largestDiffActual", largestDiffActual);
