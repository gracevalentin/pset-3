const readlineSync = require("readline-sync");

let Grade = String(readlineSync.question("\nEnter a letter grade: "));

if (Grade === "A") {
    console.log("\nYour GPA is 4.00.\n")
} else if (Grade === "A+") {
    console.log("\nYour GPA is 4.00.\n")
} else if (Grade === "A-") {
    console.log("\nYour GPA is 3.67.\n")
} else if (Grade === "B+") {
    console.log("\nYour GPA is 3.33.\n")
} else if (Grade === "B"){
    console.log("\nYour GPA is 3.00.\n")
} else if (Grade === "B-") {
    console.log("\nYour GPA is 2.67.\n")
} else if (Grade === "C+") {
    console.log("\nYour GPA is 2.33.\n")
} else if (Grade === "C") {
    console.log("\nYour GPA is 2.00.\n")
} else if (Grade === "C-") {
    console.log("\nYour GPA is 1.67.\n")
} else if (Grade === "D+") {
    console.log("\nYour GPA is 1.33.\n")
} else if (Grade === "D") {
    console.log("\nYour GPA is 1.00.\n")
} else if (Grade === "D-") {
    console.log("\nYour GPA is 0.67.\n")
} else if (Grade === "F") {
    console.log("\nYour GPA is 0.00.\n")
} else {
    console.log("\nInvalid.\n")
}
