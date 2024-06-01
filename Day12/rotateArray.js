const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
function solve() {
    readline.question('', n => {
        let arr = [];
        readline.question('', elements => {
            arr = elements.split(' ').map(Number);
            readline.question('', k => {
                rotateArray(arr, Number(n), Number(k));
                readline.close();
            });
        });
    });
}
  
function reverseArr(arr, start, end) {
    while(start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
  
function rotateArray(arr, n, k) {
    // Write code here
    k = k % n;
    reverseArr(arr, 0, n-1);
    reverseArr(arr, 0, n-k-1);
    reverseArr(arr, n-k, n-1);
    for(let i = 0; i < n; i++) {
        process.stdout.write(arr[i] + " ");
    }
}
  
solve();