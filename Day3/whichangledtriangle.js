const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (sides) => {
      
    let [a,b,c] = sides.split(' ');
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    // Write your code here
    let largest;
    if(a >= b && a >= c){
        largest = a;
    }else if(b >= a && b >= c){
        largest = b;
    }else if(c >= a && c >= b) {
        largest = c;
    }
    const LHS = 2 * (largest ** 2);
    const RHS = a ** 2 + b ** 2 + c ** 2;
    if(LHS < RHS){
        console.log(1);
    }else if(LHS > RHS){
        console.log(3);
    }else {
        console.log(2);
    }
    rl.close();
});