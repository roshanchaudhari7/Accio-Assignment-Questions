const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (str) => {
    solution(str);
    rl.close();
});

function solution(str) {
    let word = "";
    let arr = [];
    for (let i = 0; i < str.length; i++) {
    let ch = str[i];
        if (ch >= "A" && ch <= "Z") {
            arr.push(word);
            word = ch;
        } else {
            word += ch;
        }
    }
    arr.push(word);
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
    }
}