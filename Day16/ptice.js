const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function ptice(n, key) {
    let arr = [0, 0, 0];
    let Adrian = "ABC";
    let Bruno = "BABC";
    let Goran = "CCAABB";
    for (let i = 0; i < key.length; i++) {
        if (Adrian[i % 3] == key[i])
            arr[0]++;
        if (Bruno[i % 4] == key[i])
            arr[1]++;
        if (Goran[i % 6] == key[i])
            arr[2]++;
    }
    let ma = Math.max(...arr);
    console.log(ma);
    if (arr[0] == ma)
        console.log("Adrian");
    if (arr[1] == ma)
        console.log("Bruno");
    if (arr[2] == ma)
        console.log("Goran");
}

readline.question('', n => {
    readline.question('', key => {
        ptice(parseInt(n), key);
        readline.close();
    });
});