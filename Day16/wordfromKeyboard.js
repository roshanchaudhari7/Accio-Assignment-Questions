const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let arr = [];

readline.question('', num => {
    n = parseInt(num);
    readArray(0);
});

function readArray(i) {
    if (i < n) {
        readline.question('', word => {
            arr.push(word);
            readArray(i + 1);
        });
    } else {
        let result = getStrings(arr);
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
        readline.close();
    }
}
function getRow(char) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";
    if (row1.includes(char)) {
        return 1;
    } else if (row2.includes(char)) {
        return 2;
    } else {
        return 3;
    }
}

function getStrings(arr) {
    let ans = [];
    for (let word of arr) {
        const row = getRow(word[0]);
        let isSame = true;
        for (let i = 1; i < word.length; i++) {
            const char = word[i];
            const newRow = getRow(char);
            if (newRow !== row) {
                isSame = false;
                break;
            }
        }
        if (isSame) {
            ans.push(word);
        }
    }
    return ans;
}