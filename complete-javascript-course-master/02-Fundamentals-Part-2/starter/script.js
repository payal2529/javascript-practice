'use strict';

//////////////JavaScript Fundamental :- Part - 2//////////////

// -------------Coding Exercise 5: CHALLENGE #1--------------
let calcAverage = (score1, score2, score3) =>{
    let averageScore = (score1 + score2 + score3)/3;
    // console.log(averageScore);
    return averageScore;
}

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
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