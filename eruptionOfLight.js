const isPalindrome = (str) => {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

const buildPalindrome = (str) => {
  if (isPalindrome(str)) {
    return str;
  }
};

const buildPalindromeActual = buildPalindrome('abcba');
console.log('buildPalindromeActual', buildPalindromeActual);
