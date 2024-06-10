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
  while(t-- > 0) {
    let n = Number(input.shift());
    let matrix1 = [];
    let matrix2 = [];
    for(let i = 0; i < n; i++) {
      matrix1.push(input.shift().split(' ').map(Number));
    }
    for(let i = 0; i < n; i++) {
      matrix2.push(input.shift().split(' ').map(Number));
    }
    printMultiplication(matrix1, matrix2, n);
  }
});

function printMultiplication(matrixA, matrixB, n) {
  
	// Write your code here
    const rowA = matrixA.length;
    const colA = matrixA[0].length;
    const rowB = matrixB.length;
    const colB = matrixB[0].length;

    // check the colA == rowB are equal or not
    if(colA != rowB) {
        return;
    }

    // create an empty array
    const res = [];
    for(let i = 0; i < rowA; i++) {
        let smallArr = [];
    for(let j = 0; j < colB; j++) {
        smallArr.push(0);
    }
        res.push(smallArr);
    }

    // multiply matrix and add to res
    for(let i = 0; i < rowA; i++) {
        for(let j = 0; j < colB; j++) {
            for(let k = 0; k < colA; k++) {
                res[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    // print the matrix
    for(let i = 0; i < rowA; i++) {
        for(let j = 0; j < colB; j++) {
            process.stdout.write(res[i][j] + " ");
        }
        console.log();
    }	
}