const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function shuffleString(indices, s) {
    let ans = new Array(indices.length).fill("");
    for (let i = 0; i < indices.length; i++) {
        const pos = indices[i];
        ans[pos] = s[i];
    }
    console.log(ans.join(""));
}

readline.question('', n => {
    readline.question('', str => {
        readline.question('', arr => {
            arr = arr.split(' ').map(Number);
            shuffleString(arr, str);
            readline.close();
        });
    });
});