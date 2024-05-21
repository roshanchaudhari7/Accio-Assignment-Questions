const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', tempInCelsius => {
      
      const fahrenheit = (tempInCelsius * (9/5)) + 32;
      console.log(fahrenheit);
      readline.close();
  });