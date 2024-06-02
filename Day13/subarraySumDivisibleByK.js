const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [n, k] = line.split(' ').map(Number);
    rl.on('line', (line) => {
        const arr = line.split(' ').map(Number);
        const result = subarrayDivisbleByK(arr, n, k);
        console.log(result);
        rl.close();
    });
});
function subarrayDivisbleByK(arr, n, k) {
    let count = 0;
    for(let start = 0; start < n; start++) {
        let sum = 0;
        for(let end = start; end < n; end++) {
            sum = sum + arr[end];
            if(sum % k == 0) {
                count++;
            }
        }
    }
    return count;
}
    