const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('', n => {
    readline.close();
    
    let prod = 1;
    for(let num = 1; num <= n; num++){
        prod *= num;
    }
    console.log(prod);
});