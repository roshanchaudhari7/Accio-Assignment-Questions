const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let arr = [];

rl.on('line', (input) => {
    if (!n) {
        n = parseInt(input);
    } else {
    arr = input.split(' ').map(Number);
    ArrayProblem(arr);
    rl.close();
    }
});

function ArrayProblem(arr) {
	// Write your code here
    let maxEle = -Infinity;
    let minEle = Infinity;
    for(let i=0; i<arr.length; i++) {
        maxEle = Math.max(arr[i], maxEle);
        minEle = Math.min(arr[i], minEle);
    }
    console.log(maxEle - minEle);
}