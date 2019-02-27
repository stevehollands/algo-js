
function calcSurface(a,b){                 //definieren van de functie
    return a * b;
}

const readlineSync = require("readline-sync");  //definieren van de variabelen dmv vragen
let width = parseInt(readlineSync.question("Give width of rectangle : "));
let length = parseInt(readlineSync.question("Give length of rectangle :  "))

console.log(calcSurface(width, length));   //oproepen van de functie in een console.log

