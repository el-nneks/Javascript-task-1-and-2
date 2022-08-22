// ===TASK 1===

// Question 1
const teamDumebiFirst = 96;
const teamDumebiSecond = 108;
const teamDumebiThird = 89;

const teamDumebiAverage =
  (teamDumebiFirst + teamDumebiSecond + teamDumebiThird) / 3;

console.log("Team Dumebi Average Score is" + " " + teamDumebiAverage);

const teamCiromaFirst = 88;
const teamCiromaSecond = 91;
const teamCiromaThird = 110;

const teamCiromaAverage =
  (teamCiromaFirst + teamCiromaSecond + teamCiromaThird) / 3;

console.log("Team Ciroma Average Score is" + " " + teamCiromaAverage);

// Question 2

if (teamDumebiAverage > teamCiromaAverage) {
  console.log("Dumebi is the winner");
} else if (teamCiromaAverage > teamDumebiAverage) {
  console.log("Ciroma is the winner");
} else {
  console.log("They both draw and take home the price");
}

// Question 3
const dumebiBonusScore1 = 97;
const dumebiBonusScore2 = 112;
const dumebiBonusScore3 = 101;

const dumebiAverageBonus =
  (dumebiBonusScore1 + dumebiBonusScore2 + dumebiBonusScore3) / 3;
console.log("Dumebi Average for Bonus 1 is" + " " + dumebiAverageBonus);

const CiromaiBonusScore1 = 109;
const CiromaiBonusScore2 = 95;
const CiromaiBonusScore3 = 123;

const ciromaAverageBonus =
  (CiromaiBonusScore1 + CiromaiBonusScore2 + CiromaiBonusScore3) / 3;
console.log("Ciroma Average for Bonus 1 is" + " " + ciromaAverageBonus);

const minimumScore = 100;

if (
  dumebiAverageBonus > ciromaAverageBonus &&
  dumebiAverageBonus >= minimumScore
) {
  console.log("Dumebi is declared winner");
} else if (
  ciromaAverageBonus > dumebiAverageBonus &&
  ciromaAverageBonus >= minimumScore
) {
  console.log("Ciroma is declared winner");
} else {
  console.log("There is a draw");
}

// Questiom 4

const dumebiBonus2Score1 = 97;
const dumebiBonus2Score2 = 112;
const dumebiBonus2Score3 = 101;

const dumebiAverageBonus2 =
  (dumebiBonus2Score1 + dumebiBonus2Score2 + dumebiBonus2Score3) / 3;
console.log("Dumebi Average for Bonus 2 is" + " " + dumebiAverageBonus2);

const CiromaiBonus2Score1 = 109;
const CiromaiBonus2Score2 = 95;
const CiromaiBonus2Score3 = 106;

const ciromaAverageBonus2 =
  (CiromaiBonus2Score1 + CiromaiBonus2Score2 + CiromaiBonus2Score3) / 3;
console.log("Ciroma Average for Bonus 2 is" + " " + ciromaAverageBonus2);

const minimumScore2 = 100;

if (
  dumebiAverageBonus2 > ciromaAverageBonus2 &&
  dumebiAverageBonus2 >= minimumScore2
) {
  console.log("Dumebi is declared winner round 2");
} else if (
  ciromaAverageBonus2 > dumebiAverageBonus2 &&
  ciromaAverageBonus2 >= minimumScore2
) {
  console.log("Ciroma is declared winner round 2");
} else {
  console.log("There is a draw in round 2");
}

// ===TASK 2===

const score = prompt("Enter your score")
if(score<25){
    console.log("Print: F");
}else if(score>=26 && score<45){
    console.log("Print: E");
}else if(score>=46 && score<50){
    console.log("Print: D");
}else if(score>=51 && score<60){
    console.log("Print: C");
}else if(score>=61 && score<80){
    console.log("Print: B");
}else{
    console.log("Print: A");
}
