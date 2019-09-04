var Utility;
(function (Utility) {
    var MultiplyTwo = /** @class */ (function () {
        function MultiplyTwo() {
        }
        MultiplyTwo.prototype.timesTwo = function (num) {
            return num * 2;
        };
        return MultiplyTwo;
    }());
    Utility.MultiplyTwo = MultiplyTwo;
})(Utility || (Utility = {}));
// export interface MultiplyTwo {
//   export classtimesTwo(num: number): number {
//     return num * 2
//   }
// }
