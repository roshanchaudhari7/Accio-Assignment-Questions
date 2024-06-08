const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let [m, n] = input[0].split(' ').map(Number);
    let matrix = [];
    for (let i = 1; i <= m; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }
    boundaryTraversal(m, n, matrix);
});

function boundaryTraversal(m, n, matrix) { 
	// Write your code here
    if (m === 1) {
        for (let i = 0; i < n; i++) {
            console.log(matrix[0][i]);
        }
        return;
    }
 
    if (n === 1) {
        for (let i = 0; i < m; i++) {
            console.log(matrix[i][0]);
        }
        return;
    }
    for(let i = 0; i < n; i++){
        console.log(matrix[0][i]);
    }
    for(let i = 1; i < m; i++) {
        console.log(matrix[i][n-1]);
    }
    for(let i = n-2; i >= 0; i--) {
        console.log(matrix[m-1][i]);
    }
    for(let i = m-2; i > 0; i--) {
        console.log(matrix[i][0]);
    }
}