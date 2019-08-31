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

// enum
enum Starks {
  Eddard,
  Catlyn,
  Robb,
  Sansa,
  Arya,
  Bran,
  Rickard,
  Jon
}

// Interfaces
// define your interface
interface Name {
  name: String;
  // optional property
  age?: Number;
}

const theName = (obj: Name) => {
  console.log('obj.name', obj.name);
  return obj.age ? `And the age! ${obj.age}` : 'No age!';
};

const nameReq = theName({ name: 'CJ' });
console.log('nameReq', nameReq);
// no name
// theName({ label: 'Nick' });
const hasAge = theName({ name: 'Casey', age: 15 });
console.log('hasAge', hasAge);

console.log(`Classes \n\n`);

// Classes
class Stark {
  name: String;
  // the static property is accessible from the class blueprint
  // 'Da North' is the default property
  static region: String = 'Da North';
  motto: String;

  // they can have constructors, functions when the class runs
  constructor() {
    // this gives the motto a default motto
    this.motto = `Winter is coming`;
  }

  // classes can have methods
  sayHello(person: String) {
    console.log(`Hello, ${person}`);
  }
}

// the static property is available before we creawte a new instance of a Stark
console.log('Stark.region', Stark.region);

//  new instance
const Ned = new Stark();
console.log('Ned.motto', Ned.motto);

// our method
Ned.sayHello(`Cersei`);
