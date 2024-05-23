const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', year => { 
    //Write your code here and print the required output
    const A = year % 400 == 0;
    const B = year % 4 == 0;
    const C = year % 100 != 0;
    if(A || (B && C)) {
          console.log(1);
    }else {
        console.log(0);
    }
    readline.close();
  });