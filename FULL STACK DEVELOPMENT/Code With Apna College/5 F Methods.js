// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// }





// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// };







// let nums = [67, 52, 39];

// let calcSquare = (num) => {
//     console.log(num * num);
// };

// nums.forEach(calcSquare);






// let marks = [97, 98, 66, 44, 26, 88];

// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);





let n = prompt("enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum =", sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);