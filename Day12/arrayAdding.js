const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function calSum(a, b, n, m) {
    // Write your code here
    let i = n - 1;
    let j = m - 1;
    let carry = 0;
    const ans = [];
    while(i >= 0 || j >= 0) {
        let sum = 0;
        if(i >= 0) sum += a[i];
        if(j >= 0) sum += b[j];
        sum += carry;
        ans.push(sum % 10);
        carry = parseInt(sum / 10);
        i--;
        j--;
    }
    if(carry == 1) {
        ans.push(1);
    }
    ans.reverse();
    return ans;
}
  
readline.question('', n1 => {
    readline.question('', arr1 => {
        readline.question('', n2 => {
            readline.question('', arr2 => {
                arr1 = arr1.split(' ').map(Number);
                arr2 = arr2.split(' ').map(Number);
                n1 = parseInt(n1);
                n2 = parseInt(n2);  
                let res = calSum(arr1, arr2, n1, n2);
                console.log(res.join('\n'));
                readline.close();
            });
        });
    });
});