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

// Coding Exercise 6: CHALLENGE #2///
// 1st task
// by using if/else //////
// const calcTip = function(bill){
//     if( bill >= 50 && bill <= 300){
//         return (bill * 15)/100;
//     } else {
//         return (bill * 20)/100;
//     }
// }
//////////////////////// by using ternery operators //////////////////////////////
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