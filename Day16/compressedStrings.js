var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];
let q;
readline.on("line", readInputs);
function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        q = parseInt(line);
    }
    if (lineNumber > 0) {
        strs.push(line);
        q--;
    }
    if (q == 0) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    for (let i = 0; i < strs.length; i++) {
        console.log(compressString(strs[i]));
    }
}

function compressString(str) {
    let last = str[0];
    let count = 1;
    let ans = "";
    for (let i = 1; i <= str.length; i++) {
        const ch = str[i];
        if (ch === last) {
            count++;
        } else {
            if (count === 1) {
                ans += last;
            } else {
                ans += last + count;
            }
            last = ch;
            count = 1;
        }
    }
    return ans;
}