const createDigits = () => {
  let obj = {};

  let i = 0;

  while (i < 10) {
    obj[i] = true;
    i++;
  }

  return obj;
};

const isDigit = (symbol) => {
  const obj = createDigits();

  return obj.hasOwnProperty(symbol);
};

const isDigitActual = isDigit('-');
console.log('isDigitActual', isDigitActual);

const lineEncoding = (str) => {
  // const mapStr = new Map();

  // str.split('').forEach((letter) => {
  //   if (!mapStr.has(letter)) {
  //     mapStr.set(letter, { val: 1 });
  //   } else {
  //     mapStr.get(letter).val++;
  //   }
  // });

  // let result = '';

  // [...mapStr].map(([key, value]) => {
  //   if (value.val === 1) {
  //     result += `${key}`;
  //   } else {
  //     result += `${value.val}${key}`;
  //   }
  // });

  // return result;

  // placeholder otherwise the last count will not get captured
  // str += '-';
  let count = 1;
  let result = '';
  for (let i = 1; i < str.length + 1; i++) {
    let curr = str[i];
    let prev = str[i - 1];
    if (curr === prev) {
      count++;
    } else {
      if (count > 1) {
        result += `${count}`;
      }
      result += `${prev}`;
      count = 1;
    }
  }

  return result;
};

const lineEncodingActual = lineEncoding('abbcabb');
console.log('\n lineEncodingActual', lineEncodingActual); // a2bca2b

// Check Knight

const makeChessNums = () => {
  const obj = {};
  let i = 1;

  while (i < 9) {
    obj[i] = i;
    i++;
  }

  return obj;
};

const validCell = (str) => {
  // valid position
  const obj = makeChessNums();
  return (
    str.charCodeAt(0) >= 97 &&
    str.charCodeAt(0) <= 104 &&
    obj.hasOwnProperty(str.slice(1))
  );
};

/*
[  ][t1][   ][t2][  ]
[t3][  ][   ][  ][t4]
[  ][  ][pos][  ][  ]
[b1][  ][   ][  ][b2]
[  ][b3][   ][b4][  ]
*/

const generatePos = (pos, arr) => {
  const obj = makeChessNums();
  let newLetter = String.fromCharCode(pos.charCodeAt(0) + arr[0]);
  let newNum = obj[`${pos[1]}`] + arr[1];
  return `${newLetter}${newNum}`;
};

const chessKnight = (cell) => {
  // charcodes of interest
  // A -> 65 H -> 72
  let count = 0;
  // const arr = [];

  const knightPos = {
    // position, hor, vert
    t1: [-1, 2],
    t2: [1, 2],
    t3: [-2, 1],
    t4: [2, 1],
    b1: [-2, -1],
    b2: [2, -1],
    b3: [-1, -2],
    b4: [1, -2]
  };

  // iterate through knightPos
  for (const key in knightPos) {
    // generate new position
    let newPos = generatePos(cell, knightPos[key]);
    // if newPos is valid
    if (validCell(newPos)) {
      // arr.push(newPos);
      // increment count
      count++;
    }
  }
  return count;
  // return arr;
};

// console.log('A10'.slice(1));

const chessKnightActual = chessKnight('h8'); // f7, h6
console.log('\n chessKnightActual', chessKnightActual);

// Delete Digit
const deleteDigit = (n) => {
  let numStr = `${n}`;
  var max = 0;

  for (let i = 0; i < numStr.length; i++) {
    let string;
    if (i == 0) {
      string = numStr.substring(1, numStr.length);
      max = max;
    } else {
      string = numStr.substring(0, i) + numStr.substring(i + 1);
    }
    if (parseInt(string) > max) {
      max = parseInt(string);
    }
  }
  return max;
};

const deleteDigitActual = deleteDigit('152');
console.log('\n deleteDigitActual', deleteDigitActual);

/*
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelfDiv = (nums) => {
  const product = nums.reduce((a, b) => a * b);
  return nums.map((num) => product / num);
};

const actual = productExceptSelfDiv([1, 2, 3, 4]);
console.log('actual', actual);
