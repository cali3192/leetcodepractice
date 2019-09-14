// largestadjecent product
const largestAdjecentProductArr = [1, 2, -2, -3, 7, 3, 8];

const largestAdjecent = (arr) => {
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    const elem = arr[i];
    // const pre = arr[i - 1];
    // const prod = elem * arr[i - 1];
    if (elem * arr[i - 1] > result) result = elem * arr[i - 1];
  }

  return result;
};

console.log('1. largestAdjecent', largestAdjecent(largestAdjecentProductArr));

const almostIncreasingSequence = (sequence) => {
  let result = 0;
  for (let i = 1; i < sequence.length; i++)
    if (sequence[i] <= sequence[i - 1]) {
      result++;
      if (result > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  return true;
};

const matrixElementsSum = (matrix) => {
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
};

const matrixTest = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

// console.log('matrixElementsSum(matrixTest)', matrixElementsSum(matrixTest));

const allLongestStrings = (inputArray) => {
  const longest = inputArray.sort((a, b) => {
    return b.length - a.length;
  })[0].length;

  return inputArray.filter((word) => {
    return word.length === longest;
  });
};

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

const commonCharacterCount = (s1, s2) => {
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
};

let s1 = 'aabcc';
let s2 = 'adcaa';

const commonCharacterCountActual = commonCharacterCount(s1, s2);
console.log('commonCharacterCountActual', commonCharacterCountActual);

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
// console.log('isLuckyActual', isLuckyActual);

/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer
*/

const sortByHeight = (arr) => {
  let copy = arr.slice(0);
  let arr2 = copy
    .filter((elem) => {
      return elem !== -1;
    })
    .sort((a, b) => {
      return a - b;
    });
  let index = 0;
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== -1) {
      copy[i] = arr2[index];
      index++;
    }
  }
  return copy;
};

let a = [-1, 150, 190, 170, -1, -1, 160, 180]; // , the output should be
const sortHeightActual = sortByHeight(a); // [-1, 150, 160, 170, -1, -1, 180, 190].
console.log('sortHeightActual', sortHeightActual);
// const treeHeightActual = treeHeight()

const reverseInParentheses = (str) => {
  // return inputString.indexOf(`(`);
  if (str.includes(`(`)) {
    return reverseInParentheses(reverse(str));
  }
  return str;
};

const reverse = (string) => {
  let regEx = /\(([^())]*)\)/i;
  let subString = regEx.exec(string)[1];
  console.log(subString);
  subString = subString
    .split('')
    .reverse()
    .join('');
  console.log('subString', subString);
  return string.replace(regEx, subString);
};

const reverseInParenthesesActual = reverseInParentheses('foo(bar)baz(blim)');
console.log('reverseInParenthesesActual', reverseInParenthesesActual);

const alternatingSums = (arr) => {
  if (arr.length === 1) {
    return [arr[0], 0];
  }
  let team1 = arr
    .filter((elem, index) => {
      return index % 2 === 0;
    })
    .reduce((acc, elem) => {
      return acc + elem;
    });
  let team2 = arr
    .filter((elem, index) => {
      return index % 2 !== 0;
    })
    .reduce((acc, elem) => {
      return acc + elem;
    });

  return [team1, team2];
};

// let altSumArr = [50, 60, 60, 45, 70];
let altSumArr = [80];
const alternatingSumsActual = alternatingSums(altSumArr);

console.log('alternatingSumsActual', alternatingSumsActual);

const addBorder = (picture) => {
  let copy = picture.slice(0);
  // return copy;
  let fill = [...picture[0]].map((elem) => {
    return (elem = '*');
  });
  let fillLast = fill.slice();
  // return fill;
  let matrix = copy.map((word) => {
    return word.split('');
  });
  matrix.unshift(fill);
  matrix.push(fillLast);
  matrix.forEach((elem) => {
    //     // FIXME: the stupid buggy thing
    elem.unshift('*');
    elem.push('*');
    // elem.push('1');
  });

  return matrix.map((elem) => {
    return elem.join('');
  });
  // return matrix;
};

/*
["aa", 
 "**", 
 "zz"]

 ["****", 
 "*aa*", 
 "****", 
 "*zz*", 
 "****"]
*/

const borderArr = ['wzy**']; // 5
const expectedBorder = ['*******', '*wzy***', '*******'];
const addBorderActual = addBorder(borderArr);
console.log('addBorderActual', addBorderActual);

const palindrom = (str) => {
  const obj = {};

  for (let letter of str.split('')) {
    obj[letter] = (obj[letter] || 0) + 1;
  }

  return (
    Object.values(obj).filter((elem) => {
      return elem % 2 !== 0;
    }).length <= 1
  );
};

const palinActual = palindrom('aaazzzaaa');
console.log('palinActual', palinActual);

const largestDiff = (arr) => {
  // return Math.max(...arr.slice(1));
  // return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
};

const diffArr = [2, 4, 1, 0];
const largestDiffActual = largestDiff(diffArr);
console.log('largestDiffActual', largestDiffActual);

// Minesweeper Questions

const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1]
];

minesweeper = (matrix) => {
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce(
        (count, i) =>
          (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
        0
      )
    )
  );
};

const chessBoardCellColor = (cell1, cell2) => {
  let sum1 = cell1.charCodeAt(0) + cell1.charCodeAt(1);
  let sum2 = cell2.charCodeAt(0) + cell2.charCodeAt(1);
  return sum1 % 2 == sum2 % 2;
};

let chessBoardCellColorActual = chessBoardCellColor('A1', 'C3');
console.log('chessBoardCellColorActual', chessBoardCellColorActual);

const boxBlur = (image) => {
  let x = image[0].length - 2;
  let y = image.length - 2;
  let box = new Array(y);

  for (let i = 0; i < y; i++) {
    box[i] = new Array(x);
    for (let j = 0; j < x; j++) {
      box[i][j] =
        image[i][j] +
        image[i][j + 1] +
        image[i][j + 2] +
        image[i + 1][j] +
        image[i + 1][j + 1] +
        image[i + 1][j + 2] +
        image[i + 2][j] +
        image[i + 2][j + 1] +
        image[i + 2][j + 2];
      box[i][j] = Math.floor(box[i][j] / 9);
    }
  }
  return box;
};

const avoidObstacles = (inputArray) => {
  let step = 2;
  var check = true;
  while (check) {
    step++;
    check = inputArray.some((item) => {
      return item % step == 0;
    });
  }
  return step;
};

const arrayMaxConsecutiveSum = (inputArray, k) => {
  // Initial Window Solution
  // let result = 0;
  // for (let i = 0; i < inputArray.length - k + 1; i++) {
  //   let sum = inputArray.slice(i, i + k).reduce((a, b) => {
  //     return a + b;
  //   });
  //   if (sum > result) {
  //     result = sum;
  //   }
  // }
  // return result;

  let sum = inputArray.slice(0, k).reduce((x, y) => {
    return x + y;
  });

  let result = sum;
  for (let i = k; i < inputArray.length; i++) {
    sum = sum - inputArray[i - k] + inputArray[i];
    if (sum > result) {
      result = sum;
    }
  }
  return result;
};

let maxArr = [2, 3, 5, 1, 6];
const maxArrActual = arrayMaxConsecutiveSum(maxArr, 3);
console.log('maxArrActual', maxArrActual);

const knapsackLight = (v1, w1, v2, w2, max) => {
  if (w1 > max && w2 > max) {
    return 0;
  } else if (w1 + w2 <= max) {
    return v1 + v2;
  } else if (w1 <= max && w2 > max) {
    return v1;
  } else if (w2 <= max && w1 > max) {
    return v2;
  } else {
    return v1 > v2 ? v1 : v2;
  }
};

const longestDigitsPrefix = (inputString) => {
  let temp = '';
  if (inputString.length == 0) {
    return '';
  }
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] > '9' || inputString[i] < '0') {
      break;
    } else {
      temp += inputString[i];
    }
  }
  return temp;
};

const digitsActual = longestDigitsPrefix('the output is 42');
// const digitsActual = longestDigitsPrefix('123hiiiii12');
console.log('digitsActual', digitsActual);

function addDigits(n, m) {
  if (n < 10) return m;
  else {
    var t = 0;
    while (n > 0) {
      t += n % 10;
      n = Math.floor(n / 10);
    }
    return addDigits(t, m + 1);
  }
}

function digitDegree(n) {
  return addDigits(n, 0);
}

let addDigitsActual = addDigits(877);
console.log('addDigitsActual', addDigitsActual);

// Bishops and Pawns
const bishopAndPawn = (bishop, pawn) => {
  const cols = bishop.charCodeAt(0) - pawn.charCodeAt(0);
  const rows = parseFloat(bishop[1]) - parseFloat(pawn[1]);

  return Math.abs(cols) === Math.abs(rows);
};

const bishopActual = bishopAndPawn('a1', 'b2');
console.log('bishopActual', bishopActual);
// return Math.abs((bishop.charCodeAt(0) - 96) - (pawn.charCodeAt(0) - 96)) == (Math.abs(bishop.charAt(1) - pawn.charAt(1)));
