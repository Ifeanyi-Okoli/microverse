'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    n = BigInt(n)
    let factorial = BigInt(1);
    while(n >= 1){
        factorial *= n;
        n--;
    }
    return factorial.toString();
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    console.log(extraLongFactorials(n));
}
