const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    let res = determineSecondLastDigit(parseInt(n));
    if (res)
        console.log('Yes');
    else
        console.log('No');
    readline.close();
});
  
function determineSecondLastDigit(n) {
    n = parseInt(n / 10);
    const secondLastDigit = n % 10;
    return secondLastDigit == 0;
}