const readlineSync = require("readline-sync");

let questions = 3;
let name = readlineSync.question(questions-- + ")What is your name ? ");
let birth = readlineSync.question(questions-- + ")Year of birth ? ");
let city = readlineSync.question(questions-- + ")City ? ");
console.log("Hello " + name + " you are born in " + birth + " . The city of " + city + " is crazy to live in .");

