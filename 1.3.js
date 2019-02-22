const readlineSync = require("readline-sync");

let userName = readlineSync.question("What's your firstname?");

console.log("Hello " + userName);
