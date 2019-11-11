const readlineSync = require("readline-sync");

let Month = String(readlineSync.question("\nEnter a month: "));

let Month1 = Month.toUpperCase();


if(Month1=="january") {
  console.log ("\n31 days.\n")
} else if (Month1=="jan") {
  console.log ("\n31 days.\n")

} else if (Month1=="february") {
  console.log ("\n28 or 29 days.\n")
} else if (Month1=="feb") {
  console.log ("\n28 or 29 days.\n")

} else if (Month1=="march") {
  console.log ("\n31 days.\n")
} else if (Month1=="mar") {
  console.log ("\n31 days.\n")

} else if (Month1=="april") {
  console.log ("\n30 days.\n")
} else if (Month1=="apr") {
  console.log ("\n30 days.\n")

} else if (Month1=="may") {
  console.log ("\n31 days.\n")

} else if (Month1=="june") {
  console.log ("\n30 days.\n")
} else if (Month1=="jun") {
  console.log ("\n30 days.\n")

} else if (Month1=="july") {
  console.log ("\n31 days.\n")
} else if (Month1=="jul") {
  console.log ("\n31 days.\n")

} else if (Month1=="august") {
  console.log ("\n31 days.\n")
} else if (Month1=="aug") {
  console.log ("\n31 days.\n")

} else if (Month1=="september") {
  console.log ("\n30 days.\n")
} else if (Month1=="sep") {
  console.log ("\n30 days.\n")

} else if (Month1=="october") {
  console.log ("\n31 days.\n")
} else if (Month1=="oct") {
  console.log ("\n31 days.\n")

} else if (Month1=="november") {
  console.log ("\n30 days.\n")
} else if (Month1=="nov") {
  console.log ("\n30 days.\n")

} else {
  console.log ("\nInvalid.\n")
}
