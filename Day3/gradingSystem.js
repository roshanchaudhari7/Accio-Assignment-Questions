const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => {
    // Your code here
    if(n > 90){
        console.log("Excellent");
    }else if(n > 80 && n <= 90) {
        console.log("Good");
    }else if(n > 70 && n <= 80) {
        console.log("Fair");
    }else if(n > 60 && n <= 70) {
        console.log("Meets Expectations");
    }else {
        console.log("Below Expectations");
    }
    rl.close();
});