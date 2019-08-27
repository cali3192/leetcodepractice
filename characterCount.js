const charCount = (str) => {
  const obj = {};

  for (const letter of str) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  // const keys = Object.keys(obj);
  // const values = Object.values(obj);

  // const result = [];
  // for (let i = 0; i < keys.length; i++) {
  //   // 6.867ms
  //   // result.push([keys[i], values[i]]);
  //   // 6.867ms
  //   // result.push([keys[i], obj[keys[i]]]);
  // }
  // return result;

  // 6.543ms
  return Object.keys(obj).map((letter) => {
    return [letter, obj[letter]];
  });

  // 6.123ms
  // Object.keys(obj).forEach((letter) => {
  //   result.push([letter, obj[letter]]);
  // });

  // return result;
};

// charCount('mississippi') => [['m', 1], ['i', 4], ['s', 4], ['p', 2]]
console.time();
const test = charCount('mississippi');
console.log('test', test);
console.timeEnd();
