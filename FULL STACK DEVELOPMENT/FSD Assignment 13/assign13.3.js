for (let i = 1; i <= 5; i++) {
    console.log(i);
}



// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }



let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);



let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}



let person = { name: "John", age: 30, city: "Delhi" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}