const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
let n;
let mat = [];
  
readline.question('', num => {
    n = parseInt(num);
    readMatrix(n, 0);
});
  
function readMatrix(n, i) {
    if(i < n) {
      readline.question('', row => {
        mat.push(row.split(' ').map(num => parseInt(num)));
        readMatrix(n, i+1);
      });
    } else {
      diagonalDifference(mat, n);
      readline.close();
    }}
  
function diagonalDifference(mat, n) {
    // Write your code here
    let pdiag = 0;
    let sdiag = 0;
    for(let r = 0; r < n; r++) {
        pdiag += mat[r][r];
        sdiag += mat[r][n-r-1];
    }
    console.log(Math.abs(pdiag - sdiag));
}