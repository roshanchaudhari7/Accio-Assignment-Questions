const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    let n = parseInt(input[0]);
    let arrA = input[1].split(' ').map(Number);
    let m = parseInt(input[2]);
    let arrB = input[3].split(' ').map(Number);
    console.log(arrayProblem(arrA, arrB));
});
function arraySum(arr){
    const n = arr.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += arr[i];
    }
    return sum;
}
function arrayProblem(arrA, arrB) {
  // Write code here
    const arrSumA = arraySum(arrA);
    const arrSumB = arraySum(arrB);
    if(arrSumA > arrSumB){
        return "First array is larger";
    }
    else if(arrSumB > arrSumA){
        return "Second array is larger"
    }else {
        return "Both are equal";
    }
}