const findThreeLargestNumbers = (array) => {
  const storage = new Array(3).fill(Number.MIN_SAFE_INTEGER);

  for (let i = 0; i < array.length; i++) {
    const elem = array[i];

    if (elem > storage[0]) {
      if (elem > storage[2]) {
        [storage[1], storage[2]] = [storage[2], storage[1]];

        storage[2] = elem;
      } else if (elem > storage[0] && storage[2]) {
        [storage[0], storage[1]] = [storage[1], storage[0]];
        storage[1] = elem;
      } else {
        storage[0] = elem;
      }
    }
  }

  return storage;
};

const array = [141, 1, 17, -7, -17, 118, 541];

const result = findThreeLargestNumbers(array);
console.log(
  "LOG ~ file: findThreeLargestNumbers.js ~ line 22 ~ result",
  result
);
