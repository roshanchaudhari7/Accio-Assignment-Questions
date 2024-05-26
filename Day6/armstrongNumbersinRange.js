const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', (line) => {
    let [m, n] = line.split(' ').map(Number);
      
    for(let num = m; num <= n; num++){
        let count = 0;
        let temp = num;
        while(temp != 0) {
            temp = parseInt(temp / 10);
            count++;
        }
        let sum = 0;
        temp = num;
        while(temp != 0) {
            const lastDigit = temp % 10;
            temp = parseInt(temp / 10);
            sum += (lastDigit ** count);
        }
        if(num == sum){
            console.log(num);
        }
    }
    readline.close();
});