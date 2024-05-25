const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [a, b] = line.split(' ').map(Number);
    let prod = 1;
    for(let i = 0; i < b; i++){
        prod = prod * a;
    }
    console.log(prod);
});