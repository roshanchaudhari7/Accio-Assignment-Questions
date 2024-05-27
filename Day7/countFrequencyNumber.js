const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function countFreqDigit(n, d) {
    let temp = n;
    let count = 0;
    while(temp != 0) {
        const lastDigit = temp % 10;
        temp = parseInt(temp / 10);
        if(lastDigit == d){
            count++;
        }
    }
    return count;
}
  
readline.question('', (input) => {
    const [n, d] = input.split(' ').map(Number);
    console.log(countFreqDigit(n, d));
    readline.close();
});