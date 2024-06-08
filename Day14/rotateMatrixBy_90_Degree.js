var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let mat =[];
var lineNumber = -1;
readline.on("line", readInputs);
let n, m;

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        n=inputArr[0].split(' ')[0];
	    m=inputArr[0].split(' ')[1]; 
    } else{
        let Arr = inputArr[lineNumber].split(' ').map((x) => x.trim()).filter((x) => x !== '');
        mat.push(Arr);   
    }
  
    if (lineNumber ==  n) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let rotated=rotateImage(mat);
    for(let i=0;i<mat.length;i++){
	    console.log(rotated[i].join(' '));
    }
}

function rotateImage(matrix) {
	// Write your code here
    let left = 0, right = matrix.length - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let top = left, bottom = right;
            // first top left
            let topLeft = matrix[top][left + i];
            
            // swap top left and bottom left
            matrix[top][left + i] = matrix[bottom - i][left];

            // swap bottom left and bottom right
            matrix[bottom - i][left] = matrix[bottom][right - i];
            
            // swap bottom right and top right
            matrix[bottom][right - i] = matrix[top + i][right];

            // swap top right and top left
            matrix[top + i][right] = topLeft;

        }
        left++;
        right--;
    }
    return matrix;
}