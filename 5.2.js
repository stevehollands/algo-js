const readlineSync = require("readline-sync");
let asking = true;
let l = 0;



/*ask the user for the following data about its favorite TV serie.
gather all the data in a single object and return it.*/

function askTvSerie() {
    myObject.name = readlineSync.question("Can you give me the name of your favorit Tv Serie?");
    myObject.year = readlineSync.question("What is the production year of this Tv Serie?");
    
//loop for the question castmembers, so the user can give as many castmembers he like.

    while((asking === true)){
        myObject.castmembers.push(readlineSync.question("Give the names of some cast members?"));
       
    console.log(myObject.castmembers[l]);
        if(myObject.castmembers[l]!== "")
        {
            l++;
            asking=true;
        }
        else
        {
            myObject.castmembers.splice(l,1);
            asking=false;
        } 
     }
    return myObject;
} 


//display it to the user in JSON format.

    let myObject = {
        "name": "",
        "year": "",
        "castmembers": []
    }

//Create a function named randomizeCast(tvSerie):

    function randomizeCast(myObject) { 
        let index= myObject.length, Value, randomIndex;      
        while (0 !== index) {  
           randomIndex = Math.floor(Math.random() * index);  
           index -= 1;
           Value = myObject[index];          
           myObject[index] = myObject[randomIndex];          
           myObject[randomIndex] = Value;      
        }    
        return myObject;    
     }     
       

function OtherCast() {
    myObject.name = readlineSync.question("Can you give me the name of your favorit Tv Serie?");
    myObject.year = readlineSync.question("What is the production year of this Tv Serie?");
    randomizeCast(myObject.castmembers);
    myObject.castmembers.sort();

    return myObject;
}

 
//output:
    
console.log(askTvSerie());
console.log(OtherCast());