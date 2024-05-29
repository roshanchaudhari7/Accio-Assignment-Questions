const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function ArrayProblem(arr, k) {
    // Write code here
    const n = arr.length;
    let count = 0;
    for(let i = 0; i < n - 1; i++) {
        if(arr[i] + arr[i + 1] == k) {
            count++;
        }
    }
    return count;
}
  
readline.question('', (input) => {
    const [n, k] = input.split(' ').map(Number);
    readline.question('', (input) => {
        const arr = input.split(' ').map(Number);
        console.log(ArrayProblem(arr, k));
        readline.close();
    });
});   