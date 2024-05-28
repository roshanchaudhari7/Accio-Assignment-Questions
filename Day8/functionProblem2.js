const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function fun(n, m) {
    console.log(n + m);
}
  
readline.question('', (input) => {
    const [n, m] = input.split(' ').map(Number);
    fun(n, m);
    readline.close();
});