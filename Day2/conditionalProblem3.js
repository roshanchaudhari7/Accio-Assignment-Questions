const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('', n => {
    if(n > 1){
        console.log("You entered more");
    }else if(n <= 1){
        console.log("You entered less");
    }
    readline.close();
  });