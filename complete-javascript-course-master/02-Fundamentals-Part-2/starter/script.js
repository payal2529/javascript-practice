'use strict';

//////////////JavaScript Fundamental :- Part - 2//////////////

// -------------Coding Exercise 5: CHALLENGE #1--------------
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
// test data 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// test data 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//--------------------Coding Exercise 6: CHALLENGE #2----------------

// 1st task
/////////////----by using if/else------///////////
// const calcTip = function(bill){
//     if( bill >= 50 && bill <= 300){
//         return (bill * 15)/100;
//     } else {
//         return (bill * 20)/100;
//     }
// }
/////////////-------by using ternery operators---------////////////
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

 console.log(calcTip(100));

//  2nd task
 const bills = [125, 555, 44];
 
//  3rd task
 const tips = [calcTip(bills[0]) , calcTip(bills[1]) , calcTip(bills[2])];
 
//   4th task
const totals = [bills[0] + tips[0] ,
               bills[1] + tips[1] ,
               bills[2] + tips[2]];
console.log(bills , tips);
console.log(totals);

////--------------this chalange is given in Object Notation video --------------////
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// --------print a string byusing bracket notation--------
console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his bestfriend is called ${jonas['friends'][0]}`);
// --------print a string byusing Dot Notation ----------
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}`);

////-------------- this chalange is given in object method video ---------------////
 const payal = {
    firstName : 'Payal',
    lastName : 'Porwal',
    birthYeah : 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    hasDriverLicense : 25,

    calcAge : function() {
        this.age = 2037 - this.birthYeah;
        return this.age ;
        },

    getSummary : function() {
      return (`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`);
    }
 };
console.log(payal.calcAge());
console.log(payal.age);
console.log(payal.age);
console.log(payal.age);
console.log(payal.getSummary());


// -------------------------Coding Exercise 7: CHALLENGE #3-----------------------
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
console.log(mark.calcBMI());

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
     }
}
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

// --------by using conditional operator----------
// console.log(`${john.bmi > mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`}`);

// ---------------------Coding Exercise 8: CHALLENGE #4---------------------

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for(let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
  }

  console.log(`bills: ${bills}  &  tips: ${tips} , totals: ${totals}`);

//   ---------with bonas Question in challange :#4---------------
const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
         // sum = sum + arr[i];
        sum += arr[i];     
    }
    return sum / arr.length;
}
console.log(calcAverage(bills));
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


// ------------------==========> FINISHED <===========-----------------