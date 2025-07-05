// 1. if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. if...else statement
let num = 10;
if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 3. if...else if...else statement
let marks = 75;
if (marks > 90) {
    console.log("Grade A");
} else if (marks >= 70 && marks <= 90) {
    console.log("Grade B");
} else if (marks >= 50 && marks < 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// 4. switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Midweek day");
}