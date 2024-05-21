const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (radius) => {
    const PI = 3;
    const area = PI * radius * radius;
    const perimeter = 2 * PI * radius;
    console.log(area);
    console.log(perimeter);
});