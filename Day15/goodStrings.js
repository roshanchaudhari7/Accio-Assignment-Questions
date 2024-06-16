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
    let t = Number(input.shift());
    while (t-- > 0) {
        let s = input.shift();
        let n = Number(input.shift());
        let A = [];
        for (let i = 0; i < n; i++) {
            A.push(input.shift());
        }
        console.log(goodStrings(s, A, n));
    }
});

function goodStrings(s, A, n) {
    let ans = A.length;
    for (let i = 0; i < A.length; i++) {
        const currStr = A[i];
        for (let j = 0; j < currStr.length; j++) {
            const ch = currStr[j];
            if (!s.includes(ch)) {
                ans--;
                break;
            }
        }
    }
    return ans;
}