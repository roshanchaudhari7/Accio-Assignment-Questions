const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (s) => {
    palindromeSubStrs(s);
    rl.close();
});
function palindromeSubStrs(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let subStr = "";
        for (let j = i; j < s.length; j++) {
            subStr += s[j];
            if (checkPalindrome(subStr)) {
                arr.push(subStr);
            }
        }
    }
    arr = Array.from(new Set(arr));
    arr.sort();
    arr.forEach(arrv => console.log(arrv));
}

function checkPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    let isPalindrome = true;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}