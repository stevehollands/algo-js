const readlineSync = require("readline-sync");

let n = 0;
let total = 0;
let questions = 0;

n = new Number(readlineSync.question("Enter a number: "));
total = n;

while(questions != total)
{
  n = n + new Number(readlineSync.question("Enter a number: "));
  ++questions;
}
console.log(total + questions);
