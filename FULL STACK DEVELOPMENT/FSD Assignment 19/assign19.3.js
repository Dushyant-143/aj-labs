function multiply(a, b) {
    return a * b;
}

const obj = {
    value: 10,
    add: function(num) {
        return this.value + num;
    }
};

async function runOperations() {
    try {
        const result1 = multiply(5, 3);
        console.log(result1);

        const result2 = obj.add(5);
        console.log(result2);
    } catch (error) {
        console.log("Error:", error);
    }
}

runOperations();