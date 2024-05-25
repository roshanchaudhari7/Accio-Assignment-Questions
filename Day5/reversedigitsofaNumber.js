const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    let lastDigit;
    let rev = 0;
    while(n != 0) {
        lastDigit = n % 10;
        n = parseInt(n / 10);
        rev = rev * 10 + lastDigit;
    }
    console.log(rev);
    readline.close();
});