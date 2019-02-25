const readlineSync = require("readline-sync");

let min = parseInt(readlineSync.question("Min waarde = "));
let max = parseInt(readlineSync.question("Max waarde = "));
let current = parseInt(readlineSync.question("huidige waarde = "));

if(max < min)
{
  console.log("U moet uw wiskunde bijschaven");
  return;
}

if(current > min && current < max)
{
  console.log("de huidige waarde ligt tussen het minimum en maximum");
  

}
else
{
  console.log("de huidige waarde ligt niet tussen het minimum en maximum");
  
}

