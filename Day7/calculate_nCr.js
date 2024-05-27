const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
  
function calculate_nCr(n, r) {
    const nFact = factorial(n);
    const rFact = factorial(r);
    const nMinrFact = factorial(n - r);
    const result = nFact / (rFact * nMinrFact);
    return result;
}
  
readline.question('', input => {
    const [n, r] = input.split(' ').map(Number);
    const ans = calculate_nCr(n, r);
    console.log(ans);
    readline.close();
});