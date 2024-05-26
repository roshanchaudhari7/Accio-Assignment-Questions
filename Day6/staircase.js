const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    n = parseInt(n);
    for(let r = 0; r < n; r++) {
        const hashes = r + 1;
        const spaces = n - hashes;
        for(let s = 0; s < spaces; s++) {
            process.stdout.write(" ");
        }
        for(let h = 0; h < hashes; h++) {
            process.stdout.write("#");
        }
        console.log();
    }
    readline.close();
});