const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function findGeometricTriplets(arr, n) {
    // Write code here
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {                
                if(arr[j] ** 2 == arr[i] * arr[k]) {                    
                    console.log(arr[i], arr[j], arr[k]);
                }
            }
        }
    }
}
  
readline.question('', N => {
    readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        findGeometricTriplets(arr, N);
        readline.close();
    });
});