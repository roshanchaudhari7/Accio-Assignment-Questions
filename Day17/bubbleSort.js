const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', N => {
    readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        bubbleSort(N, arr);
        console.log(arr.join(' '));
        readline.close();
    });
});

function bubbleSort(N, arr) {
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}