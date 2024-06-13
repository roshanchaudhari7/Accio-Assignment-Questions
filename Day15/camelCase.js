const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let t;

rl.on('line', (line) => {
    if (!t) {
        t = parseInt(line);
        return;
    }
    console.log(camelCase(line));
    t--;
    if (t === 0) {
        rl.close();
    }
});

function camelCase(s) {
    let ans = "";
    let isUnderscore = false;
    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        if(ch === '_') {
            isUnderscore = true;
            continue;
        } else if(isUnderscore === true) {
            ans += ch.toUpperCase();
        } else {
            ans += ch;
        }
        isUnderscore = false;
    }
    return ans;
}