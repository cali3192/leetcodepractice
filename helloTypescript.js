/// <reference path='./tsUtil.ts'/>
// console.log(`Hello Typescript`);
// stricter you are with types, it prevents you from making compiler erroers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Stark {
//   name: String;
//   // the static property is accessible from the class blueprint
//   // 'Da North' is the default property
//   static region: String = 'Da North';
//   motto: String;
//   // they can have constructors, functions when the class runs
//   constructor() {
//     // this gives the motto a default motto
//     this.motto = `Winter is coming`;
//   }
//   // classes can have methods
//   sayHello(person: String) {
//     console.log(`Hello, ${person}`);
//   }
// }
// // the static property is available before we creawte a new instance of a Stark
// console.log('Stark.region', Stark.region);
// //  new instance
// const Ned = new Stark();
// console.log('Ned.motto', Ned.motto);
// // our method
// Ned.sayHello(`Cersei`);
var Person = /** @class */ (function () {
    // don't forget this line!
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing!");
    };
    return Person;
}());
var bran = new Person('Bran');
bran.dance();
// Another example
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + " meters");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
// Modules in Typescript
console.log("\n\n Typescript Modules");
var use = new Utility.MultiplyTwo();
console.log('use', use);
console.log('use.timesTwo(3)', use.timesTwo(3));
