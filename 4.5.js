function calcDistance(x1, y1, x2, y2){
    return Math.hypot(x2-x1, y2-y1);   //stelling pythagoras, vierkantswortel van het kwadraat van de sommen
}

console.log(calcDistance (1,1,2,2));
console.log(calcDistance (1,1,3,1));
console.log(calcDistance (4,1,1,1));
console.log(calcDistance (-2,2,2,-2));

 /*alternatief 

const readlineSync = require("readline-sync");

console.log("What value do you want to calculate the distance between?");

let a = parseInt(readlineSync.question("Please give the start value : "));
let b = parseInt(readlineSync.question("Please give the end value : "));

function calcDistance(a,b){
   return Math.abs(a-b);
}

console.log(calcDistance(a,b)); */