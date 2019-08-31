// console.log(`Hello Typescript`);
// stricter you are with types, it prevents you from making compiler erroers
var sayHello = function (str) {
    console.log("hello " + str);
    return "hello " + str;
};
sayHello('Typescript');
// sayHello(1);
// boolean example
var opposite = function (bool) {
    return !bool;
};
var addExcitement = function (arr) {
    return arr.map(function (name) {
        return name + "!!!";
        // return 1;
    });
};
var names = ['Andrew', 'Brian', 'Soumith'];
// error
// const names = ['Andrew', 'Brian', 'Soumith', 1];
var excitedNamess = addExcitement(names);
console.log('excitedNamess', excitedNamess);
// void functions, no return :(
var starkMotto = function () {
    console.log("Winter is coming");
    // return `hi`;
};
starkMotto();
