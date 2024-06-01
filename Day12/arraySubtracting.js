var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", function(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 3) {
        performSubtraction();
        readline.close();
    }
});

function performSubtraction() {
    let N = parseInt(inputArr[0]);
    let Arr1 = inputArr[1].split(" ").map(Number);
    let M = parseInt(inputArr[2]);
    let Arr2 = inputArr[3].split(" ").map(Number);
    let result = findSubtraction(Arr1, N, Arr2, M);
    result.forEach(element => console.log(element));
}

function isSwapReq(n1, l1, n2, l2) { 
    if(l1 < l2) {
        return true;
    } 
    else if(l1 > l2) {
        return false;
    }

    for(let i = 0; i < l1; i++) {
        if(n1[i] != n2[i]) {
            if(n1[i] < n2[i]) return true;
            else return false;
        }
    }
    return false;
}

function findSubtraction(n1, l1, n2, l2) {
 //Write your code here
    const swap = isSwapReq(n1, l1, n2, l2);
    if (swap == true) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
        temp = l1;
        l1 = l2;
        l2 = temp;
    }

    let i = l1 - 1;
    let j = l2 - 1;
    let carry = 0;
    const res = [];
    while(i >= 0 || j >= 0) {
        let diff = n1[i] + carry;
        if(j >= 0) diff -= n2[j];
        if(diff < 0) {
            diff += 10;
            carry = -1;
        }else carry = 0;

        res.push(diff);
        i--;
        j--;
    }
    res.reverse();
    if (swap == true) res[0] *= -1;
    return res;
}