const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function printElementsAlternately(mat, m, n) {
    //Write code here and print output
    let leftToRight = true;
    for(let r = 0; r < m; r++) {
        if(leftToRight) {
            for(let c = 0; c < n; c++) {
                process.stdout.write(mat[r][c] + " ");
            }
        }else {
            for(let c = n-1; c >= 0; c--) {
                process.stdout.write(mat[r][c] + " ");
            }
        }
        leftToRight = !leftToRight;
    }
}
  
readline.question('', (input) => {
    let [m, n] = input.split(' ').map(Number);
    let mat = [];
    let count = 0;
    readline.on('line', (line) => {
        mat.push(line.split(' ').map(Number));
        count++;
        if(count === m) {
            printElementsAlternately(mat, m, n);
            readline.close();
        }
    });
});