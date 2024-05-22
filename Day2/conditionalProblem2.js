const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    if(input < 30){
        console.log("less important");
    }else{
        console.log("more important");
    }
  rl.close();
});