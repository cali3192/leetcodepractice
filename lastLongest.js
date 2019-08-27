const lengthOfLastWord = (s) => {
  // let arr = s.split(' ');
  // return s !== '' ? arr[arr.length - 1].length : 0;
  // s = s.trim();
  let arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};

const test = lengthOfLastWord('');
console.log('test', test);
