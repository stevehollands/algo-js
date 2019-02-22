const readlineSync = require("readline-sync");

let shoe = 42;
let birth = 1982;

let shoeName = readlineSync.question("What's your Shoesize?");
let birthName = readlineSync.question("What's your birthdate?");

console.log((((((shoe * 2)+ 5)* 50)- birth)+ 1766));
