const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const Amount = Number(readlineSync.question("\nEnter a number: "));

if (Amount % 2 === 0) {
    console.log("\nEven.\n")
} else if (Amount % 1 === 0){
    console.log("\nOdd.\n")
} else if (Amount !=0){
    console.log("\nInvalid.\n")
}
