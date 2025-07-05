const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);
console.log("Sorted ages:", ages);

// Find min and max
const min = ages[0];
const max = ages[ages.length - 1];
console.log("Min age:", min);
console.log("Max age:", max);

// Find median
let median;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    median = (ages[mid - 1] + ages[mid]) / 2;
} else {
    median = ages[mid];
}
console.log("Median age:", median);

// Find average age
const sum = ages.reduce((a, b) => a + b, 0);
const average = sum / ages.length;
console.log("Average age:", average);

// Find range
const range = max - min;
console.log("Range of ages:", range);

// Compare min-average and max-average
console.log("Min - Average:", Math.abs(min - average));
console.log("Max - Average:", Math.abs(max - average));