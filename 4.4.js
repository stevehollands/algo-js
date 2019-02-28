//Create a function named average(arr) that takes an array of numbers as argument and returns the average.

//Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

//Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

//Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

const readlineSync = require("readline-sync");

// We ask the user how many random numbers should be generated.
let n = parseInt(readlineSync.question("How many numbers do you want? ")); 
// Empty array that will be filled later on.
let arr=[];


/* =========================================ONLY FUNCTIONS================================================ */



// This function will make a random number between 0 - max. We can define this later.
function rand10(max){
    return Math.floor(Math.random() * Math.floor(max));
}



// This function will push a array, with random numbers between 1-10.
function multirand(n){
   return arr.push(rand10(10))
}



//This will calculate the average of the array given above.
function average(arr){
    let total = 0;

    //for the length of the given array, we will count up the given amount and devide it by the length.
    for(var i = 0; i < arr.length; i++){
    total += arr[i];
    }

    return total/arr.length;
}

//Calculates the min value of the array.
function min(arr){
    return Math.min (...arr);
}
//Calculates the max value of the array.
function max(arr){
    return Math.max (...arr);
}
//Function to call all results in the end (is just an extra.)
function callAll(){
    console.log(arr);
    console.log(average(arr));
    console.log(min(arr));
    console.log(max(arr));
}
/* ========================================Program=================================================== */

// we call the multirand function to repeat the push.
for( i = 0; i < n; i++){
    multirand(n);
}
//Call the logs.
callAll();



