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
  let m = parseInt(input[0].split(' ')[0]);
  let n = parseInt(input[0].split(' ')[1]);
  let matrix = [];
  for(let i = 1; i <= m; i++) {
    matrix.push(input[i].split(' ').map(Number));
  }
  console.log(isToeplitzMatrix(matrix, m, n));
});

function isToeplitzMatrix(matrix, m, n) {
  // write code here
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(r + 1 < m && c + 1 < n && matrix[r][c] != matrix[r + 1][c + 1]) {
                return false;
            }
        }
    }
    return true;
}