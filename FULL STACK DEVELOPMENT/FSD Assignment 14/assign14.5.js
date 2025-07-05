// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Testing the factorial function
console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Factorial of 0 is: ${factorial(0)}`);
console.log(`Factorial of 3 is: ${factorial(3)}`);