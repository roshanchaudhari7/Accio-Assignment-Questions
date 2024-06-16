const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function hey(str) {
    let eCount = 0;
    for(let ch of str) {
        if(ch === 'e') {
            eCount++;
        }
    }
  
    let ans = "h";
    for(let i=0; i<eCount; i++) {
        ans += "ee";
    }
    ans += 'y';
    return ans;
}
  
readline.question('', str => {
    let result = hey(str);
    console.log(result);
    readline.close();
});