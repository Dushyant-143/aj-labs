function squareInput(input) {
    try {
        const number = Number(input);
        if (isNaN(number)) {
            throw new Error("Not a number");
        }
        return number * number;
    } catch (error) {
        return "Invalid Input";
    }
}

// Test cases
console.log(squareInput("5"));     // 25
console.log(squareInput("abc"));   // Invalid Input