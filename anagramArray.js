const makeUniqueObj = (arr) => {
  const sorted = arr.map((word) => {
    return word
      .split('')
      .sort()
      .join('');
  });

  const unique = new Set(sorted);

  const obj = {};

  unique.forEach((elem) => {
    obj[elem] = [];
  });
  return obj;
};

const anagramArr = (arr) => {
  // code foes here

  const uniqueObj = makeUniqueObj(arr);

  arr.forEach((word) => {
    for (const key in uniqueObj) {
      if (
        word
          .split('')
          .sort()
          .join('') === key
      ) {
        uniqueObj[key].push(word);
      }
    }
  });
  return Object.values(uniqueObj);
};

const input = ['cat', 'act', 'tac', 'racecar', 'carecar', 'eat', 'tea'];
const actual = anagramArr(input);
const expected = [
  ['cat', 'act', 'tac'],
  ['racecar', 'carecar'],
  ['eat', 'tea']
];

console.time();
console.log('actual', actual);
console.timeEnd();

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

assertEqual(actual, expected, 'anagramArray');
