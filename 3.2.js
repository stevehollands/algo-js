let arr1 = [1,2,3,4,5];
let arr2 = [100,101,102];
let sum1 = 0;
let sum2 = 0;

for (i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
}

console.log(sum1/arr1.length);

for (e = 0; e < arr2.length; e++){
    sum2 += arr2[e];
}

console.log(sum2/arr2.length);