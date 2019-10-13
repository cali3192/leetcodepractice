const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (/\W/.test(s[i])) {
      i++;
      continue;
    }

    if (/\W/.test(s[j])) {
      j--;
      continue;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const actual = isPalindrome('A man, a plan, a canal: Panama');
console.log('actual', actual);
