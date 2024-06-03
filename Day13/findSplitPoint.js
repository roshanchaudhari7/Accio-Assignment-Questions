const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('',(N) => {
	readline.question('',(arr) => {
		N = parseInt(N);
		arr = arr.split(' ').map(Number);
		splitArray(N,arr);
	})
})



function splitArray (N, arr){
	// Write your code here
    const split = findSplitPoint(N, arr);
    if(split == -1) {
        console.log("Not Possible");
    }else {
        for(let i = 0; i <= split; i++) {
            process.stdout.write(arr[i] + " ");
        }
        console.log();
        for(let i = split + 1; i < N; i++) {
            process.stdout.write(arr[i] + " ");
        }
    }   
}

function findSplitPoint(N, arr) {
    let totalSum = 0;
    for(let i = 0; i < N; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;
    for(let split = 0; split < N - 1; split++) {
        leftSum += arr[split];
        const rightSum = totalSum - leftSum;
        if(leftSum == rightSum) {
            return split;
        }
    }
    return -1;
}