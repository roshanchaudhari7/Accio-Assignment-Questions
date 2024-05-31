const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function AngryProfessor(arr, n, k) {
    // your code here
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(arr[i] <= 0) {
            count++;
        }
    }
      
    if(count < k) {
        console.log("YES");
    }else {
        console.log("NO");
    }
}
  
readline.question('', (input) => {
    const [n, k] = input.split(' ').map(Number);
    readline.question('', (input) => {
        const arr = input.split(' ').map(Number);
        AngryProfessor(arr, n, k);
        readline.close();
    });
});