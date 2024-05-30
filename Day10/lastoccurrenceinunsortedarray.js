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
    let [n, key] = input[0].split(' ').map(Number);
    let arr = input[1].split(' ').map(Number);
    findIndex(key, arr);
});

function findIndex(key, arr) {
  //Your code goes here
    const n = arr.length;
    for(let i = n - 1; i >= 0; i--) {
        if(arr[i] == key) {
            console.log(i);
            return;
        }
    }
}