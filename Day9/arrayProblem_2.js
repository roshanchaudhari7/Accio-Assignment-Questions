const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    readline.question('', arr => {
        const arrNum = arr.split(' ').map(Number);
        const ans = ArrayProblem2(n, arrNum);
        console.log(ans);
        readline.close();
    });
});
  
function ArrayProblem2(n, arr) {
    // Write code here
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 35) {
            count++;
        }
    }
    return count;
}