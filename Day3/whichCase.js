const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('', ch => {
    // Your code here
    if("A" <= ch && ch <= "Z") {
        console.log(1);
    }else if("a" <= ch && ch <= "z") {
        console.log(0);
    }else {
        console.log(-1);
    }
    readline.close();
  });