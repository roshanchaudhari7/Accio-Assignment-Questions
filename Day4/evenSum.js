const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    n = parseInt(n);
    // Write your code here
    let sum = 0;
    for (let num = 2; num <= n; num += 2) {
        sum += num;
    }
    console.log(sum);
    readline.close();
});