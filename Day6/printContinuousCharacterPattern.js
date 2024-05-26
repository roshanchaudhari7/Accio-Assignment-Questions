const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    for(let r = 0; r < n; r++) {
        let asci = 65 + (r % 26);
        for(let c = 0; c < r + 1; c++) {
            process.stdout.write(String.fromCharCode(asci));
            asci++;
            if(asci == 91) {
                asci = 65;
            }
        }
        console.log();
    }
    readline.close();
});