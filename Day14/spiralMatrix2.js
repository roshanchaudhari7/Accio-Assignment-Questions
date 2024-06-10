const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let input = line.split(' ').map(Number);
  if(input.length === 2) {
    let r = input[0];
    let c = input[1];
    let matrix = [];
    let count = 0;
    rl.on('line', (line) => {
      matrix.push(line.split(' ').map(Number));
      count++;
      if(count === r) {
        let ans = spirallyTraverse(matrix, r, c);
        console.log(ans.join(' '));
        rl.close();
      }
    });
  }
});

function spirallyTraverse(matrix, n, m) {
  // your code here
    let topRow = 0;
    let bottomRow = n-1;
    let leftCol = 0;
    let rightCol = m-1;
    let totalElements = 0;
    let ans = [];
    while(totalElements < n*m) {
        for(let r = topRow; r <= bottomRow && totalElements < n*m; r++) {
            ans.push(matrix[r][leftCol]);
            totalElements++;
        }
        leftCol++;

        for(let c = leftCol; c <= rightCol && totalElements < n*m; c++) {
            ans.push(matrix[bottomRow][c]);
            totalElements++;
        }
        bottomRow--;

        for(let r = bottomRow; r >= topRow && totalElements < n*m; r--) {
            ans.push(matrix[r][rightCol]);
            totalElements++;
        }
        rightCol--;

        for(let c = rightCol; c >= leftCol && totalElements < n*m; c--) {
            ans.push(matrix[topRow][c]);
            totalElements++;
        }
        topRow++;
    }
    return ans;
}