function calcDistance(x1, y1, x2, y2){
    return Math.hypot(x1-x2, y1-y2);   //stelling pythagoras, vierkantwortel van het kwadraat van de sommen
}

console.log(calcDistance (1,1,2,2));
console.log(calcDistance (1,1,3,1));
console.log(calcDistance (4,1,1,1));
console.log(calcDistance (-2,2,2,-2));