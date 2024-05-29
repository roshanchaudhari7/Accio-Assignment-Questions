const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        let ans = ArrayProblem1(n, arr);
        console.log(ans);
        readline.close();
    });
});
  
function ArrayProblem1(n, arr) {
    // Write code here
    let maxNumber = -Infinity;
    let maxIndex = -1;
    for(let i = 0; i < n; i++) {
        if(arr[i] > maxNumber) {
            maxNumber = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}