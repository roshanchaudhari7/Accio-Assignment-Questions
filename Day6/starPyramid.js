const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    for(let r = 0; r < n; r++) {
        const star = r + 1;
        const spaces = n - star;
        for(let s = 0; s < spaces; s++) {
            process.stdout.write(" ");
        }
        for(let st = 0; st < star; st++) {
            process.stdout.write("* ");
        }
        console.log();
    }
    readline.close();
});