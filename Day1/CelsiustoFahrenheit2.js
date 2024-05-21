const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', C => {
      const fahrenheit = (C * (9/5)) + 32;
      console.log(fahrenheit.toFixed(6));
      readline.close();
  });