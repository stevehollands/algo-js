const readlineSync = require("readline-sync");

for (let i=1; i<=100; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
    
  /* The modulo (%) operator calculates the remainder of a division operation. 
  In this case, it calculates the remainder of i divided by 2. 
  If i is an even number, the result will be 0 and if it is an odd number, the result will be 1. 
  So this if statement checks to see if i is an even number. */


