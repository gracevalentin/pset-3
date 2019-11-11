const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const Amount = Number(readlineSync.question("\nEnter a number: "));

if(Amount === 0) {
  console.log ("\nZero.\n")
} else if (Amount>0) {
  console.log ("\nPositive.\n")
} else if (Amount<0) {
  console.log ("\nNegative.\n")
} else if (Amount !=0) {
  console.log ("\nInvalid.\n")
}
