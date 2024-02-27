// First Assignment------------------
let country = "india"
let continent = "asia"
let population = "220 millions";
console.log(country);
console.log(continent);
console.log(population);

// Coding Exercise 1: CHALLENGE #1------------------
// for first data value-----
let johnMass = 92; 
let johnHeight = 1.95;
let markMass = 78;
let markHeight = 1.69;
//  BMI = mass / height ** 2 = mass / (height * height)
const johnBMI1 = johnMass / johnHeight ** 2
console.log(johnBMI1);

const markBMI1 = markMass / markHeight ** 2
console.log(markBMI1);

let markHigherBMI = markBMI1 > johnBMI1
console.log(markHigherBMI);

// -----------------------------or-------------------------

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// ---------------------for second given data value ------

johnMass = 85; 
johnHeight = 1.76;
markMass = 95;
markHeight = 1.88;
console.log(markHigherBMI = ( markMass / markHeight ** 2) > (johnMass / johnHeight ** 2))