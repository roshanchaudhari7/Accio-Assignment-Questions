const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    readline.question('', str => {
        toggleCase(n, str);
        readline.close();
    });
});
  
function toggleCase(n, str) {
    // your code here
    let ans = "";
    for (let ch of str) {
        if (ch === ch.toUpperCase()) {
            ans += ch.toLowerCase();
        } else {
            ans += ch.toUpperCase();
        }
    }
    console.log(ans);
}