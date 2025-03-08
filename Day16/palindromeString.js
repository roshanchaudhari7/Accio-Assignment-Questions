const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (str) => {
    console.log(isPalindrome(str));
    rl.close();
});

function isPalindrome(str) {
    //write code here
    str = str.toLowerCase();
    let newStr = "";

    for (let ch of str) {
        if (ch >= "a" && ch <= "z") {
            newStr += ch;
        }
    }
    let i = 0;
    let j = newStr.length - 1;
    let isPalindrome = 1;
    while (i < j) {
        if (newStr[i] === newStr[j]) {
            i++;
            j--;
        } else {
            isPalindrome = 0;
            break;
        }
    }
    return isPalindrome;
}