const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    for(let r = 0; r < n; r++) {
        for(let c = 0; c < r+1; c++) {
            process.stdout.write("*");
        }
        console.log();
    }
    readline.close();
});