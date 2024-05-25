const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('', n => {
    // your code here
    n = Number(n);
    let flag = true;
    for(let num = 2; num <= n-1; num++){
        if(n % num == 0){
            flag = false;
            break;
        } 
    }
    if(flag == true){
        console.log(`${n} is a prime number`);
    }else{
        console.log(`${n} is not a prime number`);
    }
    readline.close();
});