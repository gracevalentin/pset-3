const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const Temp = Number(readlineSync.question("\nEnter a temperature: "));
let Scale = String(readlineSync.question("Enter a scale: "));

if(Scale="F" && Temp<=32) {
  console.log ("\nSolid.\n")
} else if (Scale="F" && 212>Temp>32){
  console.log ("\nLiquid.\n")
} else if (Scale="F" && Temp>=212){
  console.log ("\nGas.\n")

} else if(Scale="C" && Temp<=0) {
  console.log ("\nSolid.\n")
} else if (Scale="C" && 100>Temp>0){
  console.log ("\nLiquid.\n")
} else if (Scale="C" && Temp>=100){
  console.log ("\nGas.\n")

} else if(Scale="K" && Temp<=273.15) {
  console.log ("\nSolid.\n")
} else if (Scale="K" && 373.15>Temp>273.15){
  console.log ("\nLiquid.\n")
} else if (Scale="K" && Temp>=373.15){
  console.log ("\nGas.\n")

} else if (Temp !=0) {
  console.log ("\nInvalid.\n")
} else if (Scale !=0) {
  console.log ("\nInvalid.\n")
}
