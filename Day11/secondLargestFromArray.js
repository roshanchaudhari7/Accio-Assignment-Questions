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
    let arr = input[1].split(' ').map(Number);
    SecondLargest(arr, n);
});

function findMax(arr, n, firstMax, secondMax) {
    let maxEle = - Infinity;
    for(let i = 0; i < n; i++) {
        if(arr[i] != firstMax && arr[i] != secondMax) {
            maxEle = Math.max(arr[i], maxEle);
        }
    }
    return maxEle;
}

function SecondLargest(arr, n) {
    // Write code here
    const firstMax = findMax(arr, n, -Infinity, -Infinity);
    const secondMax = findMax(arr, n, firstMax, -Infinity);
    const thirdMax = findMax(arr, n, firstMax, secondMax);
    console.log(secondMax);
}