const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [a, b] = input.split(' ').map(Number);
    
    if(a%2!=0 && b%2!=0){
        console.log("we are odd");
    }
    else {
        console.log("we are simple");
    }
    rl.close();
});