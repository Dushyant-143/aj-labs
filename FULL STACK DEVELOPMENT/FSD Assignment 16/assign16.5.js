// Calculator class
class Calculator {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    add() {
        return this.value1 + this.value2;
    }

    subtract() {
        return this.value1 - this.value2;
    }

    multiply() {
        return this.value1 * this.value2;
    }

    divide() {
        if (this.value2 === 0) {
            return "Cannot divide by zero";
        }
        return this.value1 / this.value2;
    }
}

// Create and test
const calc = new Calculator(20, 5);
console.log("Addition:", calc.add());
console.log("Subtraction:", calc.subtract());
console.log("Multiplication:", calc.multiply());
console.log("Division:", calc.divide());