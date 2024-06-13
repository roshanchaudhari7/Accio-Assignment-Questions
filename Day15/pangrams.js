var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    const str = (inputArr[0]);
    console.log(isPangram(str));
}

function isPangram(sentence) {
    let buckets = new Array(26);
    buckets = buckets.fill(false);
    sentence = sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) {
        const ch = sentence[i];
        if (ch >= 'a' && ch <= 'z') {
            const code = ch.charCodeAt();
            const pos = code - 97;
            buckets[pos] = true;
        }
    }

    let isPangram = true;
    for (let i = 0; i < buckets.length; i++) {
        if (!buckets[i]) {
            isPangram = false;
        }
    }

    if (isPangram == true) {
        return "pangram";
    } else {
        return "not pangram";
    }
}
