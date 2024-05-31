const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function sumArrayExceptSelf(nums, n) {
    // Write your code here
    let totalSum = 0;
    for(let i = 0; i < n; i++) {
        totalSum += nums[i];
    }
    const ans = [];
    for(let i = 0; i < n; i++) {
        ans.push(totalSum - nums[i]);
    }
    return ans;
}
  
readline.question('', n => {
    let nums = [];
    readline.on('line', num => {
        nums = num.split(' ').map(Number);
        let ans = sumArrayExceptSelf(nums, n);
        console.log(ans.join(' '));
        readline.close();
    });
});