const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('', n => {
    let mat = [];
    let count = 0;
    readline.on('line', (line) => {
        mat.push(line.split(' ').map(Number));
        count++;
        if(count == n) {
            alternateMatrixSum(mat, n);
            readline.close();
        }
    });
});
  
function alternateMatrixSum(mat, n) {
    // Write your code here
    let bSquares = 0;
    let wSquares = 0;
    for(let r = 0; r < n; r++) {
        for(let c = 0; c < n; c++) {
            if((r + c) % 2 == 0) {
                bSquares += mat[r][c];
            } else {
                wSquares += mat[r][c];
            }
        }
    }
    console.log(bSquares);
    console.log(wSquares);
}