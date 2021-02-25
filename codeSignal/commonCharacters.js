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
    if (!compare[letter]) delete original[letter];
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

// // Initial Solution
// const commonChars = (arr) => {
//   const [first, ...rest] = arr;
//   // console.log('rest', rest);
//   console.log('first', first);
//   console.log('rest', rest);

//   let obj = makeObj(first);
//   let temp;

//   rest.forEach((word) => {
//     temp = makeObj(word);
//     // same characters
//     sameLetters(obj, temp);

//     // same number of letters
//     sameOccurances(obj, temp);
//   });
//   return [].concat(...Object.values(obj));
// };

const commonChars = (arr) => {
  // if (arr.length === 0) return [];
  // return arr[0].split('').forEach((letter) => {
  // return `${letter} and ${arr}`;
  // arr.forEach((word) => {
  //   return `${letter} and ${word}`;
  // });
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(`${letter} ==> ${arr}`);
  //     return `${letter} ==> ${arr}`;
  //     // const index = arr[i].indexOf(letter);
  //     // if(index) {
  //     //   //
  //     // }
  //   }
  //   // return arr.forEach((word) => {
  //   // word.indexOf(letter);
  //   // let index = word.indexOf(letter);
  //   // if (index) {
  //   //   word = word.replace(letter, '');
  //   // }
  //   // });
  // });
  // if(arr.length==0)return []
  // return arr[0].split('').map(m=>{
  //     for(let i =1;i < arr.length;i++){
  //         let index = arr[i].indexOf(m)
  //         if(index==-1){
  //             return null
  //         }
  //         else{
  //             arri] = arr[i].replace(m,'')
  //         }
  //     }
  //     return m
  // }).filter(m=>m!=null)
  if (arr.length === 0) return null;
  return arr[0]
    .split('')
    .map((letter) => {
      for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(letter);
        if (index === -1) {
          return null;
        } else {
          return arr[i].replace(letter, '');
        }
      }
      return letter;
    })
    .filter((letter) => {
      letter !== null;
    });
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
// console.log('actualTwo', actualTwo);
const expectedTwo = ['c', 'o'];
// assertEqual(actualTwo, expectedTwo, 'commonChars');

const arr3 = ['aaa', 'bbb', 'ccc'];
const actualThree = commonChars(arr3);
// console.log('actualThree', actualThree);
