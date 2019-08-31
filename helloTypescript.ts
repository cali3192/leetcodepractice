// console.log(`Hello Typescript`);
// stricter you are with types, it prevents you from making compiler erroers

const sayHello = (str: String) => {
  console.log(`hello ${str}`);
  return `hello ${str}`;
};

sayHello('Typescript');
// sayHello(1);

// boolean example
const opposite = (bool: Boolean) => {
  return !bool;
};

const addExcitement = (arr: String[]): String[] => {
  return arr.map((name) => {
    return `${name}!!!`;
    // return 1;
  });
};

const names = ['Andrew', 'Brian', 'Soumith'];
// error
// const names = ['Andrew', 'Brian', 'Soumith', 1];
const excitedNamess = addExcitement(names);
console.log('excitedNamess', excitedNamess);

// void functions, no return :(
const starkMotto = (): void => {
  console.log(`Winter is coming`);
  // return `hi`;
};

starkMotto();
