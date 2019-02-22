const readlineSync = require("readline-sync");

let userName = readlineSync.question('Can you give me your name ?');
let firstName = readlineSync.question('Can you give me your firstname ?');
let cityName = readlineSync.question('Can you give me your City ?')

console.log("Hello " + userName);
