const makeObj = (str) => {
  const obj = {};
  str.split('').forEach((letter) => {
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = [letter];
    } else {
      obj[letter].push(letter);
    }
  });
  return obj;
};

const sameLetters = (original, compare) => {
  for (const letter in original) {
    if (!compare[letter]) {
      delete original[letter];
    }
  }
  return original;
};

const sameOccurances = (original, compare) => {
  for (const letter in original) {
    if (compare[letter].length < original[letter].length) {
      original[letter] = compare[letter];
    }
  }
  return original;
};

const commonChars = (arr) => {
  const [first, ...rest] = arr;
  // console.log('rest', rest);
  console.log('first', first);
  console.log('rest', rest);

  let obj = makeObj(first);
  let temp;

  rest.forEach((word) => {
    temp = makeObj(word);
    // same characters
    sameLetters(obj, temp);

    // same number of letters
    sameOccurances(obj, temp);
  });
  return [].concat(...Object.values(obj));
};

const assertEqual = (result, expected, testName) => {
  if (typeof result === 'object' || typeof expected === 'object') {
    result = JSON.stringify(result);
    expected = JSON.stringify(expected);
  }
  if (result === expected) {
    console.log(`Test passed ${testName}!`);
  } else {
    console.log(
      `Test failed ${testName}: expected ${expected} but got ${result}`
    );
  }
};

const arr1 = ['bellasrl', 'label', 'roller'];
const makeObjActual = makeObj(arr1[0]);
// console.log('makeObjActual', makeObjActual);
const actualOne = commonChars(arr1);
console.log('actualOne', actualOne);
const expectedOne = ['e', 'l', 'l'];
// assertEqual(actualOne, expectedOne, 'commonChars');

const arr2 = ['cool', 'lock', 'cook'];
const actualTwo = commonChars(arr2);
console.log('actualTwo', actualTwo);
const expectedTwo = ['c', 'o'];
// assertEqual(actualTwo, expectedTwo, 'commonChars');

const arr3 = ['aaa', 'bbb', 'ccc'];
const actualThree = commonChars(arr3);
console.log('actualThree', actualThree);
