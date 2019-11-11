const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const Year = Number(readlineSync.question("\nEnter a year: "));

if (!Year) {
    console.log("\nInvalid.\n")
} else if (Year % 4 === 0 ) {
    console.log("\n" + Year + " is a leap year.\n")
} else if (Year % 4 === 1) {
    console.log("\n" + Year + " is not a leap year.\n")
} else if (Year % 4 === 2) {
    console.log("\n" + Year + " is not a leap year.\n")
} else if (Year % 4 === 3) {
    console.log("\n" + Year + " is not a leap year.\n")
} else {
    console.log("\nInvalid.\n")
}
//NOT DONE
