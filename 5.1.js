
const readlineSync = require("readline-sync");

//Create a object that will hold the data
let series = {
    "name": "",
    "year": "",
    "cast": []
}
//Boolean to keep track if we are asking a series of questions.
let asking = true;


function askTvSerie(){
    //Ask questions only once.
    series.name=readlineSync.question("What's your favorite TV-Series ?");
    series.year=readlineSync.question("What was the first production year ?");

    //Define the index of array
    let i = 0;

    //This while is made to add more crewmembers to the list.
    while(asking === true){
        series.cast.push(readlineSync.question("What's the name of the Cast members?"));

        
        console.log(series.cast[i]);
        if(series.cast[i]!== ""){
            i++;
            asking=true;
        }
        else{
            series.cast.splice(i,1);
            asking=false;
        }
        /* let awnser=readlineSync.question("Anyone else? yes or no ");
        if(awnser === "yes"){
            asking = true;
        }
        else if(awnser === "no")
        {
            asking = false;
        }
        else{
            console.log
        } */
    }
    return series;
    }   
    console.log(askTvSerie(series));