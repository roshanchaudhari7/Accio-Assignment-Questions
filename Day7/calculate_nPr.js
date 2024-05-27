const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    readline.question('', r => {
        console.log(solve(parseInt(n), parseInt(r)));
        readline.close();
    });
});
function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
  
function solve(n, r) {
    const nFact = factorial(n);
    const nMinRFact = factorial(n-r);
    const nPr = nFact / nMinRFact;
    return nPr;
}