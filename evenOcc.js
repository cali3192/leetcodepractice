const evenOccurrence = (arr) => {
  // return arr;
  const toObj = arr.reduce((acc, elem) => {
    acc.hasOwnProperty(elem) ? acc[elem]++ : (acc[elem] = 1);
    return acc;
  }, {});

  for (const key in toObj) {
    if (toObj[key] % 2 !== 0) {
      delete key;
    }
  }

  return Object.keys(toObj).map(elem => {
    if(typeof elem === )
  })
};

let testArr = [1, 4, 6, 6, 4];
const evenActual = evenOccurrence(testArr);
console.log('evenActual', evenActual);
