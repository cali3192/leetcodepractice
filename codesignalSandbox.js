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
  /*
  [
    [],
    [],
    [],
  ]
  */
  //
  // foreach string
  // unshift(*)
  // push(*)
  //
  let copy = picture.slice(0);
  // return copy;
  let fill = [...picture[0]].map((elem) => {
    if (elem !== '*') {
      return (elem = '*');
    }
  });
  // return fill;
  let matrix = copy.map((word) => {
    return word.split('');
  });
  matrix.unshift(fill);
  matrix.push(fill);
  matrix.forEach((elem) => {
    //     // FIXME: the stupid buggy thing
    // elem.unshift('*')
    elem.push('*');
  });

  // matrix.forEach((elem) => {
  //   elem.unshift('*');
  // });

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    if (i === 0 || i === matrix.length - 1) {
      arr.slice();
    }
  }

  // return matrix.map((elem) => {
  //   return elem.join('');
  // });
  return matrix;
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

const borderArr = ['aa', '**', 'zz'];
const addBorderActual = addBorder(borderArr);
console.log('addBorderActual', addBorderActual);
