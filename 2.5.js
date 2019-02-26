const readlineSync = require("readline-sync");

let num = readlineSync.question(`What's your favorite number? `);

if (num == 42) {
    console.log("yes");
} 

else {

    while (num !== 42){
        console.log("Are you sure? ");
        num = parseInt(readlineSync.question("What's your favorite number?"));
         if (num == 42) {
            console.log("yes");
         }
}
}
