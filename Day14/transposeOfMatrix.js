const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let matrix = [];

rl.on('line', (input) => {
    if (!n) {
        n = Number(input);
    } else {
        matrix.push(input.split(' ').map(Number));
        if (matrix.length === n) {
            let ans = matrixTranspose(matrix, n);
            for(let i=0; i<n; i++) {
                console.log(ans[i].join(' '));
            }
            rl.close();
        }
    }
});

function matrixTranspose(mat, n) {
  //Write your code here
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    return mat;
}