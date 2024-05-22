const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (x) => {
    rl.on('line', (y) => {
        //write code here
        if(x > 0 && y > 0) {
            console.log(1);
        }else if (x < 0 && y > 0) {
            console.log(2);
        }else if (x < 0 && y < 0) {
            console.log(3);
        }else if (x > 0 && y < 0) {
            console.log(4);
        }
        rl.close();
    });
});