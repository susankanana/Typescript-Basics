"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myfunctions = () => {
    // Function Declaration
    function add(x, y) {
        return x + y;
    }
    // Function Expression
    const subtract = function (x, y) {
        return x - y;
    };
    // Arrow Function
    const multiply = (x, y) => {
        return x * y;
    };
    // Optional Parameters
    const divide = (x, y) => {
        if (y) {
            return x / y;
        }
        return x;
    };
    console.log(add(5, 10));
    console.log(subtract(10, 5));
    console.log(multiply(5, 10));
    console.log(divide(10));
};
exports.default = myfunctions;
