// let num = prompt("Enter a number:");

// if(num % 5 === 0) {
//     console.log(num," is multiple of 5");
// } else {
//     console.log(num,"is NOT a multiple of 5");
// }



let score =prompt("enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <= 89) {
    grade = "B";
} else if(score >= 60 && score <= 69) {
    grade = "C";
} else if(score >= 50 && score <= 59) {
    grade = "D";
} else if(score >= 0 && score <= 49) {
    grade = "E";
}

console.log("according to your scores, your grade was :", grade)