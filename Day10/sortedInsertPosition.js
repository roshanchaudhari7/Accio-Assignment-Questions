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
    let N = Number(input[0]);
    let A = input[1].split(' ').map(Number);
    let B = Number(input[2]);
    console.log(searchInsert(A, B));
});

function searchInsert(a, b) {
  // Write code here
    const n = a.length;
    for(let i = 0; i < n; i++) {
        if(a[i] >= b) {
            return i;
        }
    }
    return n;
}