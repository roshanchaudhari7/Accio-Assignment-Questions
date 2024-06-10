const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    let mat = [];
    let n;
    let m;
    let lineNumber = 0;
    function constructMatrix(a) {
        mat.push(a.split(' ').map(Number));
        n = mat[0][0];
        m = mat[0][1];
        lineNumber++;
        if(lineNumber===n+1){
            spirallyTraverse(mat.splice(1));
            readline.close()
        }
    }
    readline.on('line', constructMatrix);

function spirallyTraverse(mat) {
    // Write your code here
    const row = mat.length;
    const col = mat[0].length;
      
    let topRow = 0;
    let bottomRow = row-1;
    let leftCol = 0;
    let rightCol = col-1;
    let totalElements = 0;
      
    while(totalElements < row*col) {
        for(let c = leftCol; c <= rightCol && totalElements < row*col; c++) {
            process.stdout.write(mat[topRow][c] + " ");
            totalElements++;
        }
        topRow++;
  
        for(let r = topRow; r <= bottomRow && totalElements < row*col; r++) {
            process.stdout.write(mat[r][rightCol] + " ");
            totalElements++;
        }
        rightCol--;
  
        for(let c = rightCol; c >= leftCol && totalElements < row*col; c--) {
            process.stdout.write(mat[bottomRow][c] + " ");
            totalElements++;
        }
        bottomRow--;
  
        for(let r = bottomRow; r >= topRow && totalElements < row*col; r--) {
            process.stdout.write(mat[r][leftCol] + " ");
            totalElements++;
        }
        leftCol++;
    }
}