const transform = (str: String): String => {
  return str
    .split('')
    .sort()
    .join('');
};

const isAnagramTS = (s: String, t: String): Boolean => {
  if (s.length !== t.length) return false;
  return transform(s) === transform(t);
  // return true;
};

const actual = isAnagramTS('anagram', 'nagaram');
console.time();
console.log('actual', actual);
console.timeEnd();
