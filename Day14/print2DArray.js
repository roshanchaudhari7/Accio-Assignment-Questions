const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function printElements(arr, n, m) {
    //Write your code here
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            process.stdout.write(arr[i][j] + " ");
        }
        console.log();
    }
}
  
readline.question('', (input) => {
    const [n, m] = input.split(' ').map(Number);
    let arr = [];
    let count = 0;
    readline.on('line', (line) => {
        arr.push(line.split(' ').map(Number));
        count++;
        if(count === n) {
            printElements(arr, n, m);
            readline.close();
        }
    });
});