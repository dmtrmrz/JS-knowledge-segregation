// Hoisting

// Function

// H

printName("Dzmitry");

function printName(name) {
  console.log("Hello, my name is " + name);
}

// var

console.log(yourName); // undefined
var yourName;
yourName = "Alex";

nameIs = "Dmitry";
console.log(nameIs); // Dmitry
var nameIs;

// let

myName = "John";
console.log(myName); // ReferenceError: Cannot access 'myName' before initialization
let myName;

// const

console.log(hisName); // SyntaxError: Missing initializer in const declaration - only hoisting const but not ""
const hisName = "Jim";
