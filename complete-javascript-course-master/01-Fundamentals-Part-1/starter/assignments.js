// First Assignment------------------
let country = "india"
let continent = "asia"
let population = "220 millions";
console.log(country);
console.log(continent);
console.log(population);

// Coding Exercise 1: CHALLENGE #1---------topic:- basic operators--------

// let johnMass = 92; 
// let johnHeight = 1.95;
// let markMass = 78;
// let markHeight = 1.69;
// const johnBMI1 = johnMass / johnHeight ** 2
// const markBMI1 = markMass / markHeight ** 2
// let markHigherBMI = markBMI1 > johnBMI1
// console.log(johnBMI1, markBMI1, markHigherBMI);

// -----------------------------or-------------------------

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// Coding Exercise 2: CHALLENGE #2---------Topic :- strings and template literals, If/else statements----------

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Coding Exercise 3: CHALLENGE #3--------Topic :- Type Conversion and Coercion, Truthy and Falsy Values, Equality Operators: == vs. ===, Boolean Logic, Logical Operators------

const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
    console.log("Dolphin win the trophy");
}
  else if( scoreKoalas > scoreDolphins){
      console.log("Koalas win the trophy");
  }
  else{
      console.log("Both win the trophy");
  }