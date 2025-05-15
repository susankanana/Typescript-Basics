"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeAlliances = () => {
    /* TypeScript has a concept of "type alliances" which allows you to create
     types that are based on other types. This can be useful for creating
   more complex types that are based on simpler types.
      */
    const employee = {
        name: "Kemboi",
        age: 25,
        hobbies: ["reading", "coding"],
        employeeId: 12345,
        position: "Software Developer"
    };
    console.log("--TypeScript Type Alliances--");
    console.log(`Employee Details: ${JSON.stringify(employee)}`);
    // or
    console.log(`Employee Details: ${employee.name} is ${employee.age} years old and enjoys ${employee.hobbies.join(", ")}. Their employee ID is ${employee.employeeId} and their position is ${employee.position}.`);
};
exports.default = typeAlliances;
