const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('', n => {
    switch(parseInt(n)){
        case 28:
            console.log("i am young");
            break;
        default :
            console.log("i am not young");
    }
    readline.close();
  });