const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    let rev = 0;
    let temp = n;
    while(temp != 0) {
        const lastDigit = temp % 10;
        temp = parseInt(temp / 10);
        rev = rev * 10 + lastDigit;
    }
  
    if(n == rev) {
        console.log(true);
    }else {
        console.log(false);
    }
    readline.close();
});