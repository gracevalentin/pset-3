const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


const Value1 = Number(readlineSync.question("\nEnter three numbers. \n\n"));
const Value2 = Number(readlineSync.question(""));
const Value3 = Number(readlineSync.question(""));

if (Value1!=0) {
    console.log("\nInvalid.\n")
} else if (Value2!=0) {
    console.log("\nInvalid.\n")
} else if (Value3!=0) {
    console.log("\nInvalid.\n")

} else if (Value1 < Value2 && Value2 < Value3) {
    console.log("\nStrictly Increasing.\n")
} else if (Value1 > Value2 && Value2 > Value3) {
    console.log("\nStrictly Decreasing.\n")
} else if (Value1 === Value2 && Value2 === Value3) {
    console.log("\nEqual.\n")

} else if (Value1 === Value2 && Value2 < Value3) {
    console.log("\nIncreasing.\n")
} else if (Value1 < Value2 && Value2 === Value3) {
    console.log("\nIncreasing.\n")

} else if (Value1 === Value2 && Value2 > Value3) {
    console.log("\nDecreasing.\n")
} else if (Value1 > Value2 && Value2 === Value3) {
    console.log("\nDecreasing.\n")

} else if (Value1 > Value2 && Value2 < Value3) {
    console.log("\nUnordered.")
} else if (Value1 < Value2 && Value2 > Value3) {
    console.log("\nUnordered.")

} else {
    console.log("\nInvalid.")
}
