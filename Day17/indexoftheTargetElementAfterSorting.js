var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 2) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
    let large = parseInt(inputArr[2]);
    console.log(findTargetIndex(Arr, large));
}

function findTargetIndex(arr, target) {

    function compare(a, b) {
        return a - b;
    }

    arr.sort(compare);
    const pos = arr.indexOf(target);
    return pos;
}