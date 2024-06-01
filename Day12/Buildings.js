const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
let inputArr = [];
let lineNumber = -1;
let inputSize;
let K;
readline.on("line", readInputs);
  
function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
   
    
    if (lineNumber == 1) {
        logic("s");
        readline.close();
    }
}
  
function logic(input) {
    const T = inputArr[0]; 
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
    console.log(countVisibleRoofs(Arr));   
}
  
function countVisibleRoofs(heights) {
      // Write your code here
    
}