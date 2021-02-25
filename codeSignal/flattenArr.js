const flatten = (a) => {
  return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
};

console.log(flatten([[1, 2, [3, [[4]]]]]));
