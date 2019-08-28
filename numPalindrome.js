const isPalindrome = (x) => {
  // code here
  const arr = `${x}`.split('');
  const reverse = arr.reverse();
  if (arr.includes('-')) {
    return false;
  }
  return reverse.join('') === `${x}`;
};

console.time();
const test = isPalindrome(121);
console.log('test', test);
console.timeEnd();
