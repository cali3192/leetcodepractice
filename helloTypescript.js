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
// enum
var Starks;
(function (Starks) {
    Starks[Starks["Eddard"] = 0] = "Eddard";
    Starks[Starks["Catlyn"] = 1] = "Catlyn";
    Starks[Starks["Robb"] = 2] = "Robb";
    Starks[Starks["Sansa"] = 3] = "Sansa";
    Starks[Starks["Arya"] = 4] = "Arya";
    Starks[Starks["Bran"] = 5] = "Bran";
    Starks[Starks["Rickard"] = 6] = "Rickard";
    Starks[Starks["Jon"] = 7] = "Jon";
})(Starks || (Starks = {}));
var theName = function (obj) {
    console.log('obj.name', obj.name);
    return obj.age ? "And the age! " + obj.age : 'No age!';
};
var nameReq = theName({ name: 'CJ' });
console.log('nameReq', nameReq);
// no name
// theName({ label: 'Nick' });
var hasAge = theName({ name: 'Casey', age: 15 });
console.log('hasAge', hasAge);
console.log("Classes \n\n");
// Classes
var Stark = /** @class */ (function () {
    // they can have constructors, functions when the class runs
    function Stark() {
        // this gives the motto a default motto
        this.motto = "Winter is coming";
    }
    // classes can have methods
    Stark.prototype.sayHello = function (person) {
        console.log("Hello, " + person);
    };
    // the static property is accessible from the class blueprint
    // 'Da North' is the default property
    Stark.region = 'Da North';
    return Stark;
}());
// the static property is available before we creawte a new instance of a Stark
console.log('Stark.region', Stark.region);
//  new instance
var Ned = new Stark();
console.log('Ned.motto', Ned.motto);
// our method
Ned.sayHello("Cersei");
