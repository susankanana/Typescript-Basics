"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables = () => {
    // 1. Variable Declarations : TypeScript allows you to declare variables with a specific type
    let a = 10;
    let name = "Kemboi";
    let isMale = true;
    let evenNumbers = [2, 4, 6, 8];
    let g = [1, "two", true]; // any type can hold any value
    //2. variable inference: TypeScript can infer the type of a variable based on its value
    let b = 20;
    console.log("--TypeScript Variables Types--");
    console.log(`Type of a: ${typeof a} value: ${a}`);
    console.log(`Type of name: ${typeof name} value: ${name}`);
    console.log(`Type of isMale: ${typeof isMale} value: ${isMale}`);
    console.log(`Type of evenNumbers: ${typeof evenNumbers} value: ${evenNumbers}`);
    console.log(`Type of g: ${typeof g} value: ${g}`);
    console.log(`Type of b: ${typeof b} value: ${b}`);
};
exports.default = variables;
