const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (t) => {
    t = Number(t);
    let count = 0;
    rl.on('line', (input) => {
        if(count < t) {
        console.log(countWords(input));
        count++;
        }
        if(count === t) {
        rl.close();
        }
    });
});

function countWords(s) {
    let str = s.trim();
    let ans = str.split(' ');
    return ans.length;
}