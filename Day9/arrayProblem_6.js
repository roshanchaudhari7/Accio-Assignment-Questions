const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        let ans = ArrayProblem6(n, arr);
        console.log(ans);
        readline.close();
    });
});
  
function ArrayProblem6(n, arr) {
    // Write code here
    let prevEvenNumIdx = -1;
    let minDis = Infinity;
    for(let i = 0; i < n; i++) {
        if(arr[i] > 0 && arr[i] % 2 == 0) {
            if(prevEvenNumIdx != -1) {
                minDis = Math.min(minDis, i - prevEvenNumIdx);
            }
            prevEvenNumIdx = i;
        }
    }
    if(minDis == Infinity) {
        return -1;
    }
    return minDis; 
}