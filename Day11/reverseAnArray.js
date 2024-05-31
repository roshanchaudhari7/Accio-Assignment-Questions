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
        reverseArray(arr, 0, n-1);
        console.log(arr.join(' '));
        rl.close();
    }
});

function reverseArray(arr, start, end) {
    //Write code here
    while(start <= end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}