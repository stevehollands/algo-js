
// randomly generated n = 10 length array 0 <= array[n] <= 9
newFunction();

function newFunction() {
    var multiRand = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    console.log(multiRand);
}
