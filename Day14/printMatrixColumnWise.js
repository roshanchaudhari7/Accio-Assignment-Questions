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
    while (t--) {
        let [n, m] = input.shift().split(' ').map(Number);
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(input.shift().split(' ').map(Number));
        }
        printMatrixColumnwise(matrix, n, m);
        console.log();
    }
});

function printMatrixColumnwise(mat, n, m) {
    // Write code here and print output
    for(let c = 0; c < m; c++) {
        for(let r = 0; r < n; r++) {
            process.stdout.write(mat[r][c] + " ");
        }
    }
}