// largestadjecent product
const largestAdjecentProductArr = [1, 2, -2, -3, 7, 3, 8];

const largestAdjecent = (arr) => {
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    const elem = arr[i];
    const pre = arr[i - 1];
    const prod = elem * pre;
    if (prod > result) result = prod;
  }

  return result;
};

// console.log(
//   '1. largestAdjecent() \n',
//   largestAdjecent(largestAdjecentProductArr)
// );

function almostIncreasingSequence(sequence) {
  let result = 0;
  for (let i = 1; i < sequence.length; i++)
    if (sequence[i] <= sequence[i - 1]) {
      result++;
      if (result > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  return true;
}

function matrixElementsSum(matrix) {
  // const arr = matrix.flat(1);

  // TODO: don't forget this!
  // let merged = [].concat.apply([], matrix);
  // return merged.filter((elem) => {
  //   return elem !== 0;
  // }).length;

  let result = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > 0) {
        result += matrix[j][i];
      } else {
        break;
      }
    }
  }
  return result;
}

const matrixTest = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

// console.log('matrixElementsSum(matrixTest)', matrixElementsSum(matrixTest));

function allLongestStrings(inputArray) {
  const longest = inputArray.sort((a, b) => {
    return b.length - a.length;
  })[0].length;

  return inputArray.filter((word) => {
    return word.length === longest;
  });
}

inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];
const allLongestActual = allLongestStrings(inputArray);
// console.log('allLongestActual', allLongestActual);

const makeObj = (str) => {
  const obj = {};
  str.split('').forEach((letter) => {
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  });
  return obj;
};

function commonCharacterCount(s1, s2) {
  let obj1 = makeObj(s1);
  let obj2 = makeObj(s2);

  let total = 0;

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] < obj1[key]) {
        total += obj2[key];
      } else {
        total += obj1[key];
      }
    }
  }

  return total;
}

let s1 = 'aabcc';
let s2 = 'adcaa';

const commonCharacterCountActual = commonCharacterCount(s1, s2);
// console.log('commonCharacterCountActual', commonCharacterCountActual);

const removeFirstLastZero = (str) => {
  if (str[0] === '0') {
    return str.slice(1, str.length);
  }

  if (str[str.length - 1] === '0') {
    return str.slice(0, str.length - 1);
  }

  return str;
};

// function isLucky(n) {
//   const numStr = `${n}`;
//   const half = numStr.length / 2;
//   // return numStr.substring(0, half);

//   const obj = {};
//   numStr.split('').forEach((elem) => {
//     if (!obj.hasOwnProperty(elem)) {
//       obj[elem] = true;
//     }
//   });

//   if (Object.keys(obj).length === 1) {
//     return true;
//   }

//   if (
//     numStr
//       .substring(0, half)
//       .split('')
//       .reverse()
//       .join('') === numStr.substring(half, numStr.length)
//   ) {
//     return true;
//   }
//   let firstSum = numStr
//     .substring(0, half)
//     .split('')
//     .reduce((a, b) => {
//       return parseFloat(a) + parseFloat(b);
//     });

//   let second = numStr.substring(half, numStr.length);
//   let secondTrimmed = parseFloat(removeFirstLastZero(second));
//   return firstSum === secondTrimmed;
// }

const sumString = (str) => {
  return str.split('').reduce((a, b) => {
    return parseFloat(a) + parseFloat(b);
  });
};

const isLucky = (n) => {
  const toStr = `${n}`;
  const half = toStr.length / 2;    
  return (
    sumString(toStr.substr(half, toStr.length)) ===
    sumString(toStr.substr(0, half))
  );
};

const isLuckyActual = isLucky(1203);
console.log('isLuckyActual', isLuckyActual);
